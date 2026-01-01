#!/usr/bin/env bash

#------------------------------------------------------------------------------
# @file
# Builds a Hugo site hosted on a Cloudflare Worker.
#
# The Cloudflare Worker automatically installs Node.js dependencies.
# https://github.com/jmooring/hosting-cloudflare-worker
#------------------------------------------------------------------------------

main() {

  DART_SASS_VERSION=1.97.1
  GO_VERSION=1.25.5
  HUGO_VERSION=0.153.5
  NODE_VERSION=22.21.1

  export TZ=UTC

  # Create .local directory
  mkdir -p "${HOME}/.local"

  # Install Dart Sass
  echo "Installing Dart Sass ${DART_SASS_VERSION}..."
  curl -sLJO "https://github.com/sass/dart-sass/releases/download/${DART_SASS_VERSION}/dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  tar -C "${HOME}/.local" -xf "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  rm "dart-sass-${DART_SASS_VERSION}-linux-x64.tar.gz"
  export PATH="${HOME}/.local/dart-sass:${PATH}"

  # Install Go
  echo "Installing Go ${GO_VERSION}..."
  curl -sLJO "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz"
  tar -C "${HOME}/.local" -xf "go${GO_VERSION}.linux-amd64.tar.gz"
  rm "go${GO_VERSION}.linux-amd64.tar.gz"
  export PATH="${HOME}/.local/go/bin:${PATH}"

  # Install Hugo
  echo "Installing Hugo ${HUGO_VERSION}..."
  curl -sLJO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  mkdir "${HOME}/.local/hugo"
  tar -C "${HOME}/.local/hugo" -xf "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  rm "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  export PATH="${HOME}/.local/hugo:${PATH}"

  # Install Node.js
  echo "Installing Node.js ${NODE_VERSION}..."
  curl -sLJO "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz"
  tar -C "${HOME}/.local" -xf "node-v${NODE_VERSION}-linux-x64.tar.xz"
  rm "node-v${NODE_VERSION}-linux-x64.tar.xz"
  export PATH="${HOME}/.local/node-v${NODE_VERSION}-linux-x64/bin:${PATH}"

  # Verify installations
  echo "Verifying installations..."
  echo Dart Sass: "$(sass --version)"
  echo Go: "$(go version)"
  echo Hugo: "$(hugo version)"
  echo Node.js: "$(node --version)"

  # Configure Git
  echo "Configuring Git..."
  git config core.quotepath false
  if [ "$(git rev-parse --is-shallow-repository)" = "true" ]; then
    git fetch --unshallow
  fi

  # Install NPM dependencies
  echo "Installing NPM dependencies..."
  npm install

  # Install Go dependencies
  echo "Installing Go dependencies..."
  hugo mod get

  # Build the site
  echo "Building the site..."
  hugo --gc --logLevel debug --templateMetrics --templateMetricsHints --enableGitInfo --printI18nWarnings --printPathWarnings --printUnusedTemplates

  # Remove files larger than 25MB for Cloudflare limits
  find public -type f -size +25M -print -exec rm -vf {} \;

  # Copy _headers
  cp _headers public/_headers

  # Generate file list
  # find public -type f -printf '%P\n' > public/filelist.txt
  # UTF-8 BOM
  { printf '\xEF\xBB\xBF'; find public -type f -printf '%P\n'; } > public/filelist.txt
}

set -euo pipefail
main "$@"
