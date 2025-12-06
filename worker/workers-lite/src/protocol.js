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
    if (data.byteLength < 24) {
        return null;
    }

    const dataView = new DataView(data);

    // Extract command and address information
    const optionLength = dataView.getUint8(17);
    const command = dataView.getUint8(18 + optionLength);

    // Only TCP and UDP commands are supported
    if (command !== LiteCommand.TCP && command !== LiteCommand.UDP) {
        return null;
    }

    let currentPosition = 19 + optionLength;
    const port = dataView.getUint16(currentPosition);
    const addressType = dataView.getUint8(currentPosition + 2);
    currentPosition += 3;

    // Parse address based on type
    let address = "";

    if (addressType === AddressType.IPV4) {
        // IPv4 address (4 bytes)
        address = `${dataView.getUint8(currentPosition)}.${dataView.getUint8(currentPosition + 1)}.${dataView.getUint8(currentPosition + 2)}.${dataView.getUint8(currentPosition + 3)}`;
        currentPosition += 4;
    } else if (addressType === AddressType.DOMAIN) {
        // Domain name (length-prefixed)
        const domainLength = dataView.getUint8(currentPosition++);
        address = new TextDecoder().decode(
            data.slice(currentPosition, currentPosition + domainLength),
        );
        currentPosition += domainLength;
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
    } else {
        // Unknown address type
        return null;
    }

    // Return parsed header information
    return {
        command,
        port,
        address,
        headerLength: currentPosition,
        responseHeader: new Uint8Array([new Uint8Array(data)[0], 0]),
    };
}
