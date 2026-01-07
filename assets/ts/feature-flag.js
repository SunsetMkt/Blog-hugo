// Feature Flags
export var flagsStorageKey = "sunset-feature-flags";
var logPrefix = "[featureFlags]";
export var flags = [];
export var expectedFlags = [
    "lenis-basic",
    "lenis-touch",
    "waline-statistic",
    "save-ukraine",
    "enforce-grayscale",
    "outlink-alert",
    "back-to-top",
    "prevent-default",
    "always-confetti",
];
export const defaultFlags = ["outlink-alert"];
export var permissive = false;

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        /* empty */
    }

    return false;
}

export function pullFlags() {
    var flagsStorage = localStorage.getItem(flagsStorageKey);
    var parseAttempt = tryParseJSONObject(flagsStorage);
    if (parseAttempt) {
        if (!permissive) {
            // Drop any flags that aren't expected and warn
            for (var i = parseAttempt.length - 1; i >= 0; i--) {
                var flag = parseAttempt[i];
                if (!expectedFlags.includes(flag)) {
                    console.warn(logPrefix, "Dropping unexpected flag", flag);
                    parseAttempt.splice(i, 1);
                }
            }
        }
        if (parseAttempt.length === 0) {
            // "prevent-default" will naturally false this expression
            console.info(logPrefix, "No flags found, using defaults");
            parseAttempt = defaultFlags;
        }
        flags = parseAttempt;
    } else {
        console.info(logPrefix, "No flags storage found, using defaults");
        flags = defaultFlags;
        localStorage.setItem(flagsStorageKey, JSON.stringify(flags));
    }
}

export function pushFlags() {
    if (flags.length === 0) {
        console.info(
            logPrefix,
            "Intending to push empty flags, add prevent-default",
        );
        flags = ["prevent-default"];
    }
    localStorage.setItem(flagsStorageKey, JSON.stringify(flags));
}

export function isExpectedFlag(key) {
    key = key.toLowerCase();
    return expectedFlags.includes(key);
}

export function setFlag(key) {
    key = key.toLowerCase();
    if (!isExpectedFlag(key) && !permissive) {
        console.error(logPrefix, "setFlag called with unexpected key:", key);
        return false;
    }
    pullFlags();
    if (!flags.includes(key)) {
        flags.push(key);
        pushFlags();
    }
    console.info(logPrefix, "setFlag", key);
    return flags;
}

export function unsetFlag(key) {
    key = key.toLowerCase();
    if (!isExpectedFlag(key) && !permissive) {
        console.error(logPrefix, "unsetFlag called with unexpected key:", key);
        return false;
    }
    pullFlags();
    if (flags.includes(key)) {
        flags.splice(flags.indexOf(key), 1);
        pushFlags();
    }
    console.info(logPrefix, "unsetFlag", key);
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

export function getExpectedFlags() {
    return expectedFlags;
}

var featureFlags = {};
featureFlags.setFlag = setFlag;
featureFlags.unsetFlag = unsetFlag;
featureFlags.isFlagSet = isFlagSet;
featureFlags.getFlags = getFlags;
featureFlags.clearFlags = clearFlags;
featureFlags.getExpectedFlags = getExpectedFlags;
export default featureFlags;
