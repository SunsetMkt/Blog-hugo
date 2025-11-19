// Feature Flags
var flagsStorageKey = "sunset-feature-flags";
var logPrefix = "[featureFlags]";
export var flags = [];
var expectedFlags = ["lenis", "lenis-touch"];

/**
 * If you don't care about primitives and only objects then this function
 * is for you, otherwise look elsewhere.
 * This function will return `false` for any valid json primitive.
 * EG, 'true' -> false
 *     '123' -> false
 *     'null' -> false
 *     '"I'm a string"' -> false
 *
 * https://stackoverflow.com/a/20392392
 */
function tryParseJSONObject(jsonString) {
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object",
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    } catch (e) {}

    return false;
}

function pullFlags() {
    var flagsStorage = localStorage.getItem(flagsStorageKey);
    var parseAttempt = tryParseJSONObject(flagsStorage);
    if (parseAttempt) {
        flags = parseAttempt;
    } else {
        localStorage.setItem(flagsStorageKey, JSON.stringify(flags));
    }
}

function pushFlags() {
    localStorage.setItem(flagsStorageKey, JSON.stringify(flags));
}

function isExpectedFlag(key) {
    key = key.toLowerCase();
    return expectedFlags.includes(key);
}

export function setFlag(key) {
    if (!isExpectedFlag(key)) {
        console.warn(logPrefix, "setFlag called with unexpected key:", key);
    }

    key = key.toLowerCase();
    pullFlags();
    if (!flags.includes(key)) {
        flags.push(key);
        pushFlags();
    }
    console.info(logPrefix, "setFlag", key);
    return flags;
}

export function isFlagSet(key) {
    key = key.toLowerCase();
    pullFlags();
    console.info(logPrefix, "isFlagSet", key, flags.includes(key));
    return flags.includes(key);
}

export function getFlags() {
    pullFlags();
    return flags;
}

export function clearFlags() {
    flags = [];
    pushFlags();
}

var featureFlags = {};
featureFlags.setFlag = setFlag;
featureFlags.isFlagSet = isFlagSet;
featureFlags.getFlags = getFlags;
featureFlags.clearFlags = clearFlags;
export default featureFlags;
