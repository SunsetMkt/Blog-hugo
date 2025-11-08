import Confetti from "./confetti.mjs";
import * as tools from "./tools.mjs";
// import jQuery from "./jquery-3.7.1.js";

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

    // SunsetBlog.jQuery = jQuery;

    window.SunsetBlog = SunsetBlog;
}
