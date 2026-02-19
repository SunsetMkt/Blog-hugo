import fs from "fs";
import * as pagefind from "pagefind";

// Create a Pagefind search index to work with
const { index } = await pagefind.createIndex({
    forceLanguage: "zh",
    writePlayground: true,
    verbose: true,
});

// Load JSON from public/search/index.json
const data = JSON.parse(fs.readFileSync("public/search/index.json", "utf-8"));

// For each item in the JSON, add it to the index
for (const item of data) {
    await index.addCustomRecord({
        url: item.permalink,
        content: item.content,
        language: "zh",
        meta: {
            title: item.title,
        },
    });
}

// Write the index to disk
await index.writeFiles({
    outputPath: "public/pagefind",
});

await pagefind.close();
