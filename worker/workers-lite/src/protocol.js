/**
 * LITE protocol parsing module
 * Handles parsing of LITE protocol headers and addresses
 */

/**
 * LITE command types
 */
export const LiteCommand = {
    TCP: 1,
    UDP: 2,
};

/**
 * Address types in LITE protocol
 */
export const AddressType = {
    IPV4: 1,
    DOMAIN: 2,
    IPV6: 3,
};

/**
 * Parses LITE protocol header from data
 * @param {ArrayBuffer} data - Raw data containing LITE header
 * @returns {Object|null} Parsed header information or null if invalid
 */
export function parseLiteHeader(data) {
    console.debug("[Protocol] Parsing LITE header...");

    if (data.byteLength < 24) {
        console.warn("[Protocol] Header too short", {
            byteLength: data.byteLength,
            required: 24,
        });
        return null;
    }

    const dataView = new DataView(data);

    // Extract command and address information
    const optionLength = dataView.getUint8(17);
    const command = dataView.getUint8(18 + optionLength);

    console.debug("[Protocol] Header command extracted", {
        command,
        optionLength,
    });

    // Only TCP and UDP commands are supported
    if (command !== LiteCommand.TCP && command !== LiteCommand.UDP) {
        console.warn("[Protocol] Unsupported command type", { command });
        return null;
    }

    let currentPosition = 19 + optionLength;
    const port = dataView.getUint16(currentPosition);
    const addressType = dataView.getUint8(currentPosition + 2);
    currentPosition += 3;

    console.debug("[Protocol] Parsing address", { port, addressType });

    // Parse address based on type
    let address = "";

    if (addressType === AddressType.IPV4) {
        // IPv4 address (4 bytes)
        address = `${dataView.getUint8(currentPosition)}.${dataView.getUint8(currentPosition + 1)}.${dataView.getUint8(currentPosition + 2)}.${dataView.getUint8(currentPosition + 3)}`;
        currentPosition += 4;
        console.debug("[Protocol] Parsed IPv4 address", { address });
    } else if (addressType === AddressType.DOMAIN) {
        // Domain name (length-prefixed)
        const domainLength = dataView.getUint8(currentPosition++);
        address = new TextDecoder().decode(
            data.slice(currentPosition, currentPosition + domainLength),
        );
        currentPosition += domainLength;
        console.debug("[Protocol] Parsed domain address", {
            address,
            domainLength,
        });
    } else if (addressType === AddressType.IPV6) {
        // IPv6 address (16 bytes, 8 groups of 2 bytes)
        const ipv6Groups = [];
        for (
            let groupIndex = 0;
            groupIndex < 8;
            groupIndex++, currentPosition += 2
        ) {
            ipv6Groups.push(dataView.getUint16(currentPosition).toString(16));
        }
        address = ipv6Groups.join(":");
        console.debug("[Protocol] Parsed IPv6 address", { address });
    } else {
        // Unknown address type
        console.warn("[Protocol] Unknown address type", { addressType });
        return null;
    }

    console.info("[Protocol] LITE header parsed successfully", {
        command: command === LiteCommand.TCP ? "TCP" : "UDP",
        address,
        port,
        headerLength: currentPosition,
    });

    // Return parsed header information
    return {
        command,
        port,
        address,
        headerLength: currentPosition,
        responseHeader: new Uint8Array([new Uint8Array(data)[0], 0]),
    };
}
