import { FaviconSettings, MasterIcon, generateFaviconFiles, generateFaviconHtml } from '@realfavicongenerator/generate-favicon';
import { getNodeImageAdapter, loadAndConvertToSvg } from "@realfavicongenerator/image-adapter-node";

const imageAdapter = await getNodeImageAdapter();

// This is the icon that will be transformed into the various favicon files
const masterIcon: MasterIcon = {
  icon: await loadAndConvertToSvg("path/to/master-icon.svg"),
}

const faviconSettings: FaviconSettings = {
  icon: {
    desktop: {
      regularIconTransformation: {
        type: IconTransformationType.None,
      },
      darkIconType: "regular",
      darkIconTransformation: {
        type: IconTransformationType.None,
      },
    },
    touch: {
      transformation: {
        type: IconTransformationType.None,
      },
      appTitle: "Sunset 的重构博客"
    },
    webAppManifest: {
      transformation: {
        type: IconTransformationType.None,
      },
      backgroundColor: "#ffffff",
      themeColor: "#ffffff",
      name: "Sunset 的重构博客",
      shortName: "Sunset 的重构博客"
    }
  },
  path: "/favicon/",
};

// Generate files
const files = await generateFaviconFiles(masterIcon, faviconSettings, imageAdapter);
// Do something with the files: store them, etc.

// Generate HTML
const html = await generateFaviconHtml(faviconSettings);
// Do something with the markups: store them, inject them in your HTML pages, etc.
