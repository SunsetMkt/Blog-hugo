Extract this package in `<web site>/favicon/`. If your site is `http://www.example.com`, you should be able to access a file named `http://www.example.com/favicon/favicon.ico`.

Insert the following code in the `<head>` section of your pages:

```html
<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
<link rel="shortcut icon" href="/favicon/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Sunset 的重构博客" />
<link rel="manifest" href="/favicon/site.webmanifest" />
```
