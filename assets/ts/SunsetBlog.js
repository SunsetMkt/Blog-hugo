import { loadCSSPreload } from "./post-css-loader.js";
import Confetti from "./confetti.js";
import * as tools from "./tools.js";

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

    SunsetBlog.goDebug = function () {
        window.location.href = "/debug";
    };

    SunsetBlog.detectRootDomainByCookieTest =
        tools.detectRootDomainByCookieTest;

    window.SunsetBlog = SunsetBlog;
}
