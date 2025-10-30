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
    function rotateEmoji(emojiSpan) {
        // Move to the next emoji in the list
        currentIndex = (currentIndex + 1) % emojiList.length;
        emojiSpan.innerHTML = emojiList[currentIndex];
    }
    emojiSpan.onclick = function () {
        rotateEmoji(emojiSpan);
    };
    // Prevent text selection
    // emojiSpan.style.userSelect = "none";
    // console.log("emojiSpan", emojiSpan);
    /*
        if (
            navigator.language === "zh-TW" &&
            Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Taipei"
        ) {
            emojiList.add("🇹🇼");
        }*/
}
