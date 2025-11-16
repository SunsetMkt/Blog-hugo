import Lenis from "./lenis.mjs";

export default function () {
    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
        allowNestedScroll: true,
        smoothWheel: true,
        duration: 0.6,
        anchors: true,
        autoToggle: true,
        syncTouch: true,
        orientation: "vertical",
        gestureOrientation: "vertical",
        autoResize: true,
        overscroll: true,
    });

    console.info("[lenis]", lenis);

    if (window.SunsetBlog) {
        window.SunsetBlog.lenis = lenis;
    }

    // Listen for the scroll event and log the event data
    // lenis.on("scroll", (e) => {
    // console.info(e);
    // });
}
