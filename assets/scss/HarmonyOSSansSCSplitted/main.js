import fs from "fs";
import { fontSplit } from "cn-font-split";

// Ref: https://github.com/IKKI2000/harmonyos-fonts/blob/main/css/harmonyos_sans_sc.css
// https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight#common_weight_name_mapping
var fontWeightMap = {
    Thin: 100,
    Light: 300,
    Regular: 400,
    Medium: 500,
    Semibold: 600,
    Bold: 700,
    Black: 900,
};

async function split(input, outDir, weight) {
    const inputBuffer = new Uint8Array(fs.readFileSync(input).buffer);

    console.log(`Splitting ${input}...`);

    var weight_num = fontWeightMap[weight];
    if (!weight_num) {
        console.error(`Unknown weight: ${weight}`);
        return;
    }

    console.time("node");
    await fontSplit({
        input: inputBuffer, // 输入的字体缓冲区
        outDir: outDir, // 输出目录
        css: {
            // CSS 输出产物配置，一般而言不需要手动配置
            fontFamily: "HarmonyOS Sans SC", // 输出 css 产物的 font-family 名称
            fontWeight: `${weight_num}`, // 字重: 400 (常规)、700(粗体), 详细可见 https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
            fontStyle: "normal", // 字体样式: normal (常规)、italic (斜体)。可见 https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-style
            fontDisplay: "swap", // 字体显示策略，推荐 swap。可见 https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
            localFamily: [`HarmonyOS Sans SC ${weight}`], // 本地字体族名称。可见 https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
            // commentUnicodes: false, // 在 CSS 中添加 Unicode 码点注释
            compress: false, // 压缩生成的 CSS 产物
        },

        languageAreas: true, // 是否启用语言区域优化，将同一语言的字符分到一起
        autoSubset: true, // 当分包超过指定大小时是否自动拆分
        fontFeature: true, // 是否保留字体特性（如 Code 字体的连字、字距调整等）
        reduceMins: true, // 是否减少碎片分包，合并小分包以减少请求数，一般不需要修改

        // chunkSize: 70 * 1024, // 单个分片目标大小
        // chunkSizeTolerance: 1 * 1024, // 分片容差，一般不需要修改
        // maxAllowSubsetsCount: 60, // 最大允许分包数量，可能会和 chunkSize 冲突

        // testHtml: true, // 是否生成测试 HTML 文件
        // reporter: true, // 是否生成 reporter.bin 文件

        // 自定义分包输出的文件名为 6 位短哈希，或者使用自增索引: '[index].[ext]'
        renameOutputFont: `${weight}_[hash:6][ext]`,
    });
    console.timeEnd("node");
}

// If HarmonyOS_Sans_SC_Webfont_Splitted already exists, raise error
if (fs.existsSync("./HarmonyOS_Sans_SC_Webfont_Splitted")) {
    console.error(
        "HarmonyOS_Sans_SC_Webfont_Splitted/ already exists, delete it first."
    );
    process.exit(1);
}

// For every .ttf in HarmonyOS_Sans_SC folder
for (const file of fs.readdirSync("./HarmonyOS_Sans_SC")) {
    var dirName = file.split(".")[0].split("HarmonyOS_SansSC_")[1];
    if (file.endsWith(".ttf")) {
        await split(
            `./HarmonyOS_Sans_SC/${file}`,
            `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}`,
            dirName
        );
        // Copy ./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/result.css
        // to ./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/${dirName}.css
        fs.copyFileSync(
            `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/result.css`,
            `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/${dirName}.css`
        );
    }
}

// Make Merged Font
// Mkdir ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged
fs.mkdirSync("./HarmonyOS_Sans_SC_Webfont_Splitted/Merged");

// Copy ./HarmonyOS_Sans_SC_Webfont_Splitted/[dirName]/*.woff2
// to ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/
for (const dirName in fontWeightMap) {
    // List all files in ./HarmonyOS_Sans_SC_Webfont_Splitted/[dirName]
    for (const file of fs.readdirSync(
        `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}`
    )) {
        if (file.endsWith(".woff2")) {
            fs.copyFileSync(
                `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/${file}`,
                `./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/${file}`
            );
        }
    }
}

// Copy ./HarmonyOS_Sans_SC_Webfont_Splitted/[dirName]/[dirName].css
// to ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/[dirName].css
for (const dirName in fontWeightMap) {
    fs.copyFileSync(
        `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/${dirName}.css`,
        `./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/${dirName}.css`
    );
}

// Merge ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/*.css
// to ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/Merged.css
var merged = `@charset "UTF-8";\n\n`;
for (const dirName in fontWeightMap) {
    merged += `/* ${dirName}.css */\n`;
    merged += fs.readFileSync(
        `./HarmonyOS_Sans_SC_Webfont_Splitted/${dirName}/${dirName}.css`,
        "utf8"
    );
    merged += "\n\n";
}

// Ref: https://github.com/IKKI2000/harmonyos-fonts/blob/main/css/harmonyos_sans_sc.css
merged += `/* Language */
:lang(Hans),
:lang(zh),
:lang(CHS),
:lang(zh-CN),
:lang(zh-SG),
:lang(Jpan),
:lang(ja) {
    font-family: 'HarmonyOS Sans SC', sans-serif;
}`;

fs.writeFileSync(
    "./HarmonyOS_Sans_SC_Webfont_Splitted/Merged/index.css",
    merged
);

// Copy ./HarmonyOS_Sans_SC_Webfont_Splitted/Merged to ./dist recursively
fs.cpSync("./HarmonyOS_Sans_SC_Webfont_Splitted/Merged", "./dist", {
    recursive: true,
});

console.log("Done!");
