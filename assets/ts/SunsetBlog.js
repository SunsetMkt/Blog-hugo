import * as tools from "./tools.js";
// import jQuery from "./jquery-3.7.1.js";
import Cookies from "js-cookie";
import glitch from "./glitch.js";
import featureFlags from "./feature-flag.js";
import * as base16384 from "./base16384.ts";

export default function () {
    if (!window) {
        console.info("[SunsetBlog]", "window is not defined, skipping");
        return;
    }

    var SunsetBlog = {};

    // ping
    SunsetBlog.ping = function () {
        return "pong";
    };

    // ondemand css and js loader
    SunsetBlog.loadCSSPreload = tools.loadCSSPreload;
    SunsetBlog.addScriptTag = tools.addScriptTag;

    // jump to debug
    SunsetBlog.goDebug = function () {
        window.location.href = "/debug";
    };

    // detect root domain
    SunsetBlog.detectRootDomainByCookieTest =
        tools.detectRootDomainByCookieTest;

    // SunsetBlog.jQuery = jQuery;

    // cookies api
    SunsetBlog.Cookies = Cookies;

    // page glitch
    SunsetBlog.breakThisPage = glitch;

    // return UUID
    SunsetBlog.UUID = function () {
        return localStorage.SunsetUUID;
    };

    // disable zaraz
    SunsetBlog.noZaraz = function () {
        // eslint-disable-next-line no-undef
        return zaraz.consent.setAll(false);
    };

    SunsetBlog.animateCSS = tools.animateCSS;

    SunsetBlog.featureFlags = featureFlags;

    SunsetBlog.doesTheBlackMoonHowl = function () {
        window.open("https://scp-wiki.wikidot.com/", "_blank");
    };

    SunsetBlog.base16384 = base16384;

    SunsetBlog.getXkcdRandomNumber = function () {
        // https://xkcd.com/221/
        return 4; // chosen by fair dice roll.
        // guaranteed to be random.
    };

    window.SunsetBlog = SunsetBlog;
}
