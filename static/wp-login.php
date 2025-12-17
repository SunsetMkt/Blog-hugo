<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Log In &lsaquo; &#8212; WordPress</title>
        <meta
            name="robots"
            content="max-image-preview:large, noindex, noarchive"
        />
        <link
            rel="stylesheet"
            href="https://wordpress.com/wp-admin/load-styles.php?c=0&amp;dir=ltr&amp;load%5Bchunk_0%5D=dashicons,buttons,forms,l10n,login&amp;ver=6.5.3"
            media="all"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width" />
    </head>
    <body class="login no-js login-action-login wp-core-ui locale-en-us">
        <script>
            document.body.className = document.body.className.replace(
                "no-js",
                "js"
            );
        </script>

        <div id="login">
            <h1><a href="https://wordpress.org/">Powered by WordPress</a></h1>

            <form
                name="loginform"
                id="loginform"
                action="/wp-login.php"
                method="post"
            >
                <p>
                    <label for="user_login">Username or Email Address</label>
                    <input
                        type="text"
                        name="log"
                        id="user_login"
                        class="input"
                        value=""
                        size="20"
                        autocapitalize="off"
                        autocomplete="username"
                        required="required"
                    />
                </p>

                <div class="user-pass-wrap">
                    <label for="user_pass">Password</label>
                    <div class="wp-pwd">
                        <input
                            type="password"
                            name="pwd"
                            id="user_pass"
                            class="input password-input"
                            value=""
                            size="20"
                            autocomplete="current-password"
                            spellcheck="false"
                            required="required"
                        />
                        <button
                            type="button"
                            class="button button-secondary wp-hide-pw hide-if-no-js"
                            data-toggle="0"
                            aria-label="Show password"
                        >
                            <span
                                class="dashicons dashicons-visibility"
                                aria-hidden="true"
                            ></span>
                        </button>
                    </div>
                </div>
                <p class="forgetmenot">
                    <input
                        name="rememberme"
                        type="checkbox"
                        id="rememberme"
                        value="forever"
                    />
                    <label for="rememberme">Remember Me</label>
                </p>
                <p class="submit">
                    <input
                        type="submit"
                        name="wp-submit"
                        id="wp-submit"
                        class="button button-primary button-large"
                        value="Log In"
                    />
                    <input
                        type="hidden"
                        name="redirect_to"
                        value="/wp-admin/"
                    />
                    <input type="hidden" name="testcookie" value="1" />
                </p>
            </form>

            <p id="nav">
                <a
                    class="wp-login-lost-password"
                    href="/wp-login.php?action=lostpassword"
                    >Lost your password?</a
                >
            </p>
            <script>
                function wp_attempt_focus() {
                    setTimeout(function () {
                        try {
                            d = document.getElementById("user_login");
                            d.focus();
                            d.select();
                        } catch (er) {}
                    }, 200);
                }
                wp_attempt_focus();
                if (typeof wpOnload === "function") {
                    wpOnload();
                }
            </script>
            <p id="backtoblog">
                <a href="/">&larr; Go to </a>
            </p>
        </div>

        <script>
            /* <![CDATA[ */
            var _zxcvbnSettings = {
                src: "https:\/\/wordpress.com\/wp-includes\/js\/zxcvbn.min.js",
            }; /* ]]> */
        </script>
        <script src="https://wordpress.com/wp-admin/load-scripts.php?c=0&amp;load%5Bchunk_0%5D=jquery-core,jquery-migrate,zxcvbn-async,wp-polyfill-inert,regenerator-runtime,wp-polyfill,wp-hooks&amp;ver=6.5.3"></script>
        <script
            src="https://wordpress.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6"
            id="wp-i18n-js"
        ></script>
        <script id="wp-i18n-js-after">
            wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });
        </script>
        <script id="password-strength-meter-js-extra">
            var pwsL10n = {
                unknown: "Password strength unknown",
                short: "Very weak",
                bad: "Weak",
                good: "Medium",
                strong: "Strong",
                mismatch: "Mismatch",
            };
        </script>
        <script
            src="https://wordpress.com/wp-admin/js/password-strength-meter.min.js?ver=6.5.3"
            id="password-strength-meter-js"
        ></script>
        <script
            src="https://wordpress.com/wp-includes/js/underscore.min.js?ver=1.13.4"
            id="underscore-js"
        ></script>
        <script id="wp-util-js-extra">
            var _wpUtilSettings = {
                ajax: { url: "\/wp-admin\/admin-ajax.php" },
            };
        </script>
        <script
            src="https://wordpress.com/wp-includes/js/wp-util.min.js?ver=6.5.3"
            id="wp-util-js"
        ></script>
        <script id="user-profile-js-extra">
            var userProfileL10n = { user_id: "0", nonce: "201a81a40c" };
        </script>
        <script
            src="https://wordpress.com/wp-admin/js/user-profile.min.js?ver=6.5.3"
            id="user-profile-js"
        ></script>
    </body>
</html>
