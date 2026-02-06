#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Simple Fernet-based encryption CLI.

Features:
- Generate / load / save Fernet keys
- Encrypt / decrypt files or stdin/stdout
- Optional key from environment variable
- Single-file, minimal dependencies
"""

import argparse
import hashlib
import logging
import os
import sys

from cryptography.fernet import Fernet, InvalidToken

# ----------------------------------------------------------------------
# Logging
# ----------------------------------------------------------------------

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)


# ----------------------------------------------------------------------
# Utility helpers
# ----------------------------------------------------------------------


def sha256_hex(data):
    """Return SHA-256 hex digest of bytes (for logging only)."""
    return hashlib.sha256(data).hexdigest()


def read_all_from_stdin():
    """Read all bytes from stdin (binary-safe)."""
    return sys.stdin.buffer.read()


def write_all_to_stdout(data):
    """Write all bytes to stdout (binary-safe)."""
    sys.stdout.buffer.write(data)


# ----------------------------------------------------------------------
# Key handling
# ----------------------------------------------------------------------


def load_key_from_env(env_name):
    """Load Fernet key from environment variable."""
    value = os.getenv(env_name)
    if not value:
        return None
    return value.encode("utf-8")


def load_key_from_file(path):
    """Load Fernet key from file."""
    if not os.path.exists(path):
        return None
    with open(path, "rb") as f:
        return f.read()


def save_key_to_file(key, path):
    """Save Fernet key to file."""
    with open(path, "wb") as f:
        f.write(key)


def get_or_create_key(key_file, env_name, generate):
    """
    Resolve key using the following order:
    1. Environment variable
    2. Key file
    3. Generate new key (if allowed)
    """
    key = load_key_from_env(env_name)
    if key:
        logging.info("Using key from environment variable %s", env_name)
        return key

    key = load_key_from_file(key_file)
    if key:
        logging.info("Using key from file: %s", key_file)
        return key

    if generate:
        logging.info("Generating new Fernet key")
        key = Fernet.generate_key()
        save_key_to_file(key, key_file)
        logging.info("Key saved to %s (keep it safe)", key_file)
        return key

    raise RuntimeError("No key found (env or file), and generation disabled")


# ----------------------------------------------------------------------
# Crypto operations
# ----------------------------------------------------------------------


def encrypt_data(data, key):
    """Encrypt bytes using Fernet."""
    logging.info("Encrypting payload sha256=%s", sha256_hex(data))
    f = Fernet(key)
    return f.encrypt(data)


def decrypt_data(data, key):
    """Decrypt bytes using Fernet."""
    logging.info("Decrypting payload sha256=%s", sha256_hex(data))
    f = Fernet(key)
    return f.decrypt(data)


# ----------------------------------------------------------------------
# File / stream IO
# ----------------------------------------------------------------------


def read_input(path):
    """Read input from file or stdin."""
    if path == "-":
        return read_all_from_stdin()
    with open(path, "rb") as f:
        return f.read()


def write_output(path, data):
    """Write output to file or stdout."""
    if path == "-":
        write_all_to_stdout(data)
        return
    with open(path, "wb") as f:
        f.write(data)


# ----------------------------------------------------------------------
# CLI commands
# ----------------------------------------------------------------------


def cmd_genkey(args):
    key = Fernet.generate_key()
    save_key_to_file(key, args.key_file)
    logging.info("Key generated and saved to %s", args.key_file)


def cmd_encrypt(args):
    key = get_or_create_key(
        key_file=args.key_file,
        env_name=args.key_env,
        generate=True,
    )

    data = read_input(args.input)
    encrypted = encrypt_data(data, key)
    write_output(args.output, encrypted)
    logging.info("Encryption finished")


def cmd_decrypt(args):
    key = get_or_create_key(
        key_file=args.key_file,
        env_name=args.key_env,
        generate=False,
    )

    data = read_input(args.input)

    try:
        decrypted = decrypt_data(data, key)
    except InvalidToken:
        logging.error("Invalid token or wrong key")
        sys.exit(2)

    write_output(args.output, decrypted)
    logging.info("Decryption finished")


# ----------------------------------------------------------------------
# Argument parsing
# ----------------------------------------------------------------------


def build_parser():
    parser = argparse.ArgumentParser(description="Fernet encryption/decryption utility")

    parser.add_argument(
        "--key-file",
        default="payload.key",
        help="Path to Fernet key file (default: payload.key)",
    )

    parser.add_argument(
        "--key-env",
        default="PAYLOAD_KEY",
        help="Environment variable name for key (default: PAYLOAD_KEY)",
    )

    subparsers = parser.add_subparsers(dest="command", required=True)

    # genkey
    p_genkey = subparsers.add_parser("genkey", help="Generate a new Fernet key")
    p_genkey.set_defaults(func=cmd_genkey)

    # encrypt
    p_enc = subparsers.add_parser("encrypt", help="Encrypt data")
    p_enc.add_argument(
        "-i",
        "--input",
        default="-",
        help="Input file, or '-' for stdin",
    )
    p_enc.add_argument(
        "-o",
        "--output",
        default="-",
        help="Output file, or '-' for stdout",
    )
    p_enc.set_defaults(func=cmd_encrypt)

    # decrypt
    p_dec = subparsers.add_parser("decrypt", help="Decrypt data")
    p_dec.add_argument(
        "-i",
        "--input",
        default="-",
        help="Input file, or '-' for stdin",
    )
    p_dec.add_argument(
        "-o",
        "--output",
        default="-",
        help="Output file, or '-' for stdout",
    )
    p_dec.set_defaults(func=cmd_decrypt)

    return parser


# ----------------------------------------------------------------------
# Entry point
# ----------------------------------------------------------------------


def main():
    parser = build_parser()
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
