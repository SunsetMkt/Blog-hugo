import Lenis from "./lenis.mjs";

export default function () {
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
        allowNestedScroll: true,
        smoothWheel: true,
        // duration: 0.6,
        anchors: true,
        autoToggle: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
        // console.info(e);
    });
}
