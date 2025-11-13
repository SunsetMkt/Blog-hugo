export default function () {
    // Change emoji on click
    var emojiSpan = document.getElementsByClassName("emoji")[0];
    var emojiList = [
        "🇺🇦",
        "🏳️‍🌈",
        "🏳️‍⚧️",
        "🦄",
        "🏴‍☠️",
        "🍥",
        "🐍",
        "🐦‍🔥",
        "🐉",
        "🦖",
        "🐧",
        "🇺🇳",
        "🇦🇶",
        "💻",
        "⌨️",
        "📎",
    ];
    var currentIndex = 0;

    // Set the initial emoji
    emojiSpan.innerHTML = emojiList[currentIndex];

    function rotateEmoji(emojiSpan) {
        // Move to the next emoji in the list
        currentIndex = (currentIndex + 1) % emojiList.length;
        console.info(
            "[rotateEmoji]",
            emojiList[currentIndex],
            emojiList,
            currentIndex,
        );
        emojiSpan.innerHTML = emojiList[currentIndex];
    }

    emojiSpan.onclick = function () {
        rotateEmoji(emojiSpan);
    };

    // Prevent text selection
    // emojiSpan.style.userSelect = "none";

    // https://stackoverflow.com/a/78881602
    function countryCodeToFlag(countryCode) {
        // Validate the input to be exactly two characters long and all alphabetic
        if (
            !countryCode ||
            countryCode.length !== 2 ||
            !/^[a-zA-Z]+$/.test(countryCode)
        ) {
            return "🏳️"; // White Flag Emoji for unknown or invalid country codes
        }

        // Convert the country code to uppercase to match the regional indicator symbols
        const code = countryCode.toUpperCase();

        // Calculate the offset for the regional indicator symbols
        const offset = 127397;

        // Convert each letter in the country code to its corresponding regional indicator symbol
        const flag = Array.from(code)
            .map((letter) =>
                String.fromCodePoint(letter.charCodeAt(0) + offset),
            )
            .join("");

        return flag;
    }

    // Add current user country flag to emoji list and allow it to be displayed on next click
    var countryCode = navigator.language.split("-")[1];
    emojiList.unshift(countryCodeToFlag(countryCode));
    currentIndex = -1;
    // rotateEmoji(emojiSpan);

    window.SunsetBlog.emojiSpan = emojiSpan;
}
