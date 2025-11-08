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
        console.log(
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

    window.SunsetBlog.emojiSpan = emojiSpan;

    // Add TW for TW users
    window.addEventListener("cfTraceParsedAndShown", function (event) {
        if (
            navigator.language === "zh-TW" &&
            Intl.DateTimeFormat().resolvedOptions().timeZone ===
                "Asia/Taipei" &&
            window.SunsetBlog.cfTrace.loc === "TW"
        ) {
            emojiList.unshift("🇹🇼");
            currentIndex = 0;
            rotateEmoji(emojiSpan);
        }
    });
}
