import { loadCSSPreload } from "./post-css-loader.js";
import Confetti from "./confetti.js";

export default function () {
    if (!window) {
        return;
    }

    var SunsetBlog = {};

    SunsetBlog.ping = function () {
        return "pong";
    };

    SunsetBlog.loadCSSPreload = loadCSSPreload;

    SunsetBlog.Confetti = Confetti;

    window.SunsetBlog = SunsetBlog;
}
