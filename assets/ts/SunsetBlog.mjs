import Confetti from "./confetti.mjs";
import * as tools from "./tools.mjs";

export default function () {
    if (!window) {
        return;
    }

    var SunsetBlog = {};

    SunsetBlog.ping = function () {
        return "pong";
    };

    SunsetBlog.loadCSSPreload = tools.loadCSSPreload;
    SunsetBlog.addScriptTag = tools.addScriptTag;

    SunsetBlog.Confetti = Confetti;

    SunsetBlog.goDebug = function () {
        window.location.href = "/debug";
    };

    SunsetBlog.detectRootDomainByCookieTest =
        tools.detectRootDomainByCookieTest;

    window.SunsetBlog = SunsetBlog;
}
