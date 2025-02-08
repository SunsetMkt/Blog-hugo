import React from 'react';
export declare function getRoutes(): Promise<{
    routes: {
        readonly "404": {
            readonly id: "404";
            readonly path: "*";
            readonly parentId: "DocLayout";
        };
        readonly "dumi-context-layout": {
            readonly id: "dumi-context-layout";
            readonly path: "/";
            readonly isLayout: true;
        };
        readonly DocLayout: {
            readonly id: "DocLayout";
            readonly path: "/";
            readonly parentId: "dumi-context-layout";
            readonly isLayout: true;
        };
        readonly DemoLayout: {
            readonly id: "DemoLayout";
            readonly path: "/";
            readonly parentId: "dumi-context-layout";
            readonly isLayout: true;
        };
        readonly "docs/guide/struct-overview.en-US": {
            readonly path: "en-US/guide/struct-overview";
            readonly id: "docs/guide/struct-overview.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/contribution.en-US": {
            readonly path: "en-US/guide/contribution";
            readonly id: "docs/guide/contribution.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/feature-list.en-US": {
            readonly path: "en-US/guide/feature-list";
            readonly id: "docs/guide/feature-list.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-decode.en-US": {
            readonly path: "en-US/demo/audio-decode";
            readonly id: "docs/demo/audio-decode.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-encode.en-US": {
            readonly path: "en-US/demo/audio-encode";
            readonly id: "docs/demo/audio-encode.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-render.en-US": {
            readonly path: "en-US/demo/audio-render";
            readonly id: "docs/demo/audio-render.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-decode.en-US": {
            readonly path: "en-US/demo/video-decode";
            readonly id: "docs/demo/video-decode.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-encode.en-US": {
            readonly path: "en-US/demo/video-encode";
            readonly id: "docs/demo/video-encode.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-render.en-US": {
            readonly path: "en-US/demo/video-render";
            readonly id: "docs/demo/video-render.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/quick-start.en-US": {
            readonly path: "en-US/guide/quick-start";
            readonly id: "docs/guide/quick-start.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/javascript.en-US": {
            readonly path: "en-US/guide/javascript";
            readonly id: "docs/guide/javascript.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/struct-overview": {
            readonly path: "guide/struct-overview";
            readonly id: "docs/guide/struct-overview";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/transcode.en-US": {
            readonly path: "en-US/guide/transcode";
            readonly id: "docs/guide/transcode.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/timebase.en-US": {
            readonly path: "en-US/guide/timebase";
            readonly id: "docs/guide/timebase.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/licence.en-US": {
            readonly path: "en-US/guide/licence";
            readonly id: "docs/guide/licence.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/package.en-US": {
            readonly path: "en-US/guide/package";
            readonly id: "docs/guide/package.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/threads.en-US": {
            readonly path: "en-US/guide/threads";
            readonly id: "docs/guide/threads.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/contribution": {
            readonly path: "guide/contribution";
            readonly id: "docs/guide/contribution";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/feature-list": {
            readonly path: "guide/feature-list";
            readonly id: "docs/guide/feature-list";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/player.en-US": {
            readonly path: "en-US/guide/player";
            readonly id: "docs/guide/player.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-decode": {
            readonly path: "demo/audio-decode";
            readonly id: "docs/demo/audio-decode";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-encode": {
            readonly path: "demo/audio-encode";
            readonly id: "docs/demo/audio-encode";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/audio-render": {
            readonly path: "demo/audio-render";
            readonly id: "docs/demo/audio-render";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-decode": {
            readonly path: "demo/video-decode";
            readonly id: "docs/demo/video-decode";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-encode": {
            readonly path: "demo/video-encode";
            readonly id: "docs/demo/video-encode";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/video-render": {
            readonly path: "demo/video-render";
            readonly id: "docs/demo/video-render";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/index.en-US": {
            readonly path: "en-US/guide";
            readonly id: "docs/guide/index.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/quick-start": {
            readonly path: "guide/quick-start";
            readonly id: "docs/guide/quick-start";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/demux.en-US": {
            readonly path: "en-US/demo/demux";
            readonly id: "docs/demo/demux.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/index.en-US": {
            readonly path: "en-US/demo";
            readonly id: "docs/demo/index.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/probe.en-US": {
            readonly path: "en-US/demo/probe";
            readonly id: "docs/demo/probe.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/javascript": {
            readonly path: "guide/javascript";
            readonly id: "docs/guide/javascript";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/wasm.en-US": {
            readonly path: "en-US/guide/wasm";
            readonly id: "docs/guide/wasm.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/api/index.en-US": {
            readonly path: "en-US/api";
            readonly id: "docs/api/index.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/faq.en-US": {
            readonly path: "en-US/guide/faq";
            readonly id: "docs/guide/faq.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/transcode": {
            readonly path: "guide/transcode";
            readonly id: "docs/guide/transcode";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/mux.en-US": {
            readonly path: "en-US/demo/mux";
            readonly id: "docs/demo/mux.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/io.en-US": {
            readonly path: "en-US/guide/io";
            readonly id: "docs/guide/io.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/timebase": {
            readonly path: "guide/timebase";
            readonly id: "docs/guide/timebase";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/licence": {
            readonly path: "guide/licence";
            readonly id: "docs/guide/licence";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/package": {
            readonly path: "guide/package";
            readonly id: "docs/guide/package";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/threads": {
            readonly path: "guide/threads";
            readonly id: "docs/guide/threads";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/player": {
            readonly path: "guide/player";
            readonly id: "docs/guide/player";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/index": {
            readonly path: "guide";
            readonly id: "docs/guide/index";
            readonly parentId: "DocLayout";
        };
        readonly "docs/index.en-US": {
            readonly path: "en-US/";
            readonly id: "docs/index.en-US";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/demux": {
            readonly path: "demo/demux";
            readonly id: "docs/demo/demux";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/index": {
            readonly path: "demo";
            readonly id: "docs/demo/index";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/probe": {
            readonly path: "demo/probe";
            readonly id: "docs/demo/probe";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/wasm": {
            readonly path: "guide/wasm";
            readonly id: "docs/guide/wasm";
            readonly parentId: "DocLayout";
        };
        readonly "docs/api/index": {
            readonly path: "api";
            readonly id: "docs/api/index";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/faq": {
            readonly path: "guide/faq";
            readonly id: "docs/guide/faq";
            readonly parentId: "DocLayout";
        };
        readonly "docs/demo/mux": {
            readonly path: "demo/mux";
            readonly id: "docs/demo/mux";
            readonly parentId: "DocLayout";
        };
        readonly "docs/guide/io": {
            readonly path: "guide/io";
            readonly id: "docs/guide/io";
            readonly parentId: "DocLayout";
        };
        readonly "docs/index": {
            readonly path: "";
            readonly id: "docs/index";
            readonly parentId: "DocLayout";
        };
        readonly "demo-render": {
            readonly id: "demo-render";
            readonly path: "~demos/:id";
            readonly parentId: "DemoLayout";
            readonly prerender: false;
        };
    };
    routeComponents: {
        '404': React.LazyExoticComponent<any>;
        'dumi-context-layout': React.LazyExoticComponent<typeof import("/home/runner/work/libmedia/libmedia/site/.dumi/tmp-production/dumi/theme/ContextWrapper").default>;
        DocLayout: React.LazyExoticComponent<() => import("react/jsx-runtime").JSX.Element>;
        DemoLayout: React.LazyExoticComponent<() => import("react/jsx-runtime").JSX.Element>;
        'docs/guide/struct-overview.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/contribution.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/feature-list.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-decode.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-encode.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-render.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-decode.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-encode.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-render.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/quick-start.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/javascript.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/struct-overview': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/transcode.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/timebase.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/licence.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/package.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/threads.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/contribution': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/feature-list': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/player.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-decode': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-encode': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/audio-render': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-decode': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-encode': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/video-render': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/index.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/quick-start': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/demux.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/index.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/probe.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/javascript': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/wasm.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/api/index.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/faq.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/transcode': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/mux.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/io.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/timebase': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/licence': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/package': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/threads': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/player': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/index.en-US': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/demux': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/probe': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/wasm': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/api/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/faq': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/demo/mux': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/guide/io': React.LazyExoticComponent<React.ComponentType<any>>;
        'docs/index': React.LazyExoticComponent<React.ComponentType<any>>;
        'demo-render': React.LazyExoticComponent<React.FC>;
    };
}>;
