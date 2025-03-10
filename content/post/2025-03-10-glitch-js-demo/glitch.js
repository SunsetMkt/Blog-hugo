// Powered by ChatGPT
function getRandomUnicodeVariation(char) {
    let code = char.charCodeAt(0);
    let variation = Math.floor(Math.random() * 6) - 3; // 产生 -3 到 2 的随机数，降低变化幅度
    return String.fromCharCode(code + variation);
}

function getRandomElement(root) {
    let elements = Array.from(root.getElementsByTagName("*"));
    return elements.length > 0
        ? elements[Math.floor(Math.random() * elements.length)]
        : null;
}

function glitchElement(element) {
    if (!element) return;

    if (element.childNodes.length > 0) {
        let textNodes = Array.from(element.childNodes).filter(
            (n) =>
                n.nodeType === Node.TEXT_NODE && n.nodeValue.trim().length > 0,
        );
        if (textNodes.length > 0) {
            let node = textNodes[Math.floor(Math.random() * textNodes.length)];
            let text = node.nodeValue;
            let randomIndex = Math.floor(Math.random() * text.length);
            node.nodeValue =
                text.substring(0, randomIndex) +
                getRandomUnicodeVariation(text[randomIndex]) +
                text.substring(randomIndex + 1);
            return;
        }
    }

    const skipAttributes = new Set([
        "src",
        "href",
        "integrity",
        "action",
        "cite",
        "poster",
        "background",
        "codebase",
        "usemap",
        "formaction",
    ]);
    let attributes = Array.from(element.attributes).filter(
        (attr) => !skipAttributes.has(attr.name),
    );
    if (attributes.length > 0) {
        let attr = attributes[Math.floor(Math.random() * attributes.length)];
        let text = attr.value;
        if (text.length > 0) {
            let randomIndex = Math.floor(Math.random() * text.length);
            attr.value =
                text.substring(0, randomIndex) +
                getRandomUnicodeVariation(text[randomIndex]) +
                text.substring(randomIndex + 1);
        }
    }
}

let glitchInterval = 1000;
function startGlitch() {
    function increaseSpeed() {
        glitchInterval = Math.max(100, glitchInterval * 0.9); // 逐渐加速，最小间隔100ms
        clearInterval(glitchTimer);
        glitchTimer = setInterval(runGlitch, glitchInterval);
    }

    function runGlitch() {
        let element = getRandomElement(document.body);
        glitchElement(element);
        increaseSpeed();
    }

    let glitchTimer = setInterval(runGlitch, glitchInterval);
}

// startGlitch();
