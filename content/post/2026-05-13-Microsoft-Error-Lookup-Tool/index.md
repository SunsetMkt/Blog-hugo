---
categories: Original
date: 2026-05-13T00:00:00Z
tags:
    - Microsoft
    - Windows
    - 信息技术
slug: Microsoft-Error-Lookup-Tool
title: Microsoft Error Lookup Tool
---

Docs: [The Microsoft Error Lookup Tool](https://learn.microsoft.com/en-us/windows/win32/debug/system-error-code-lookup-tool)

也存在另一个在线版本，但是似乎不针对 Win32：<https://login.microsoftonline.com/error>

<!-- .\Err_6.4.5.exe /:outputtoJS >> Err_6.4.5.js -->

<script src="Err_6.4.5.js"></script>

<!--
var errors =
[
  ["2147746304", "0x80040200", "ACTIVPROF_E_PROFILER_PRESENT", "N/A", "activprof.h"],
  ["2147746305", "0x80040201", "ACTIVPROF_E_PROFILER_ABSENT", "N/A", "activprof.h"]
]
var facilities =
[
  ["2166", "_FACD3D"],
  ["2166", "_FACD3DXF"]
]
-->

<div>
    <input
        type="text"
        id="searchInput"
        placeholder="搜索错误代码、名称、Facility..."
        style="width: 400px"
    />
    <button onclick="doSearch()">搜索</button>
</div>

<hr />

<div id="errorResults">
    <h3>Errors 匹配结果</h3>
    <div id="errList">请输入关键词。</div>
</div>

<br />

<div id="facilityResults">
    <h3>Facilities 匹配结果</h3>
    <div id="facList">请输入关键词。</div>
</div>

<script>
    function doSearch() {
        const query = document
            .getElementById("searchInput")
            .value.trim()
            .toLowerCase();
        const errList = document.getElementById("errList");
        const facList = document.getElementById("facList");

        if (!query) {
            errList.innerHTML = "请输入搜索内容。";
            facList.innerHTML = "请输入搜索内容。";
            return;
        }

        // --- 搜索 Errors ---
        // 匹配 errors 数组中的任意一个字段
        const matchedErrors = errors.filter((row) =>
            row.some((field) => field.toLowerCase().includes(query)),
        );

        if (matchedErrors.length > 0) {
            let html =
                '<table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">';
            html +=
                "<thead><tr><th>Decimal</th><th>Hex</th><th>Name</th><th>Description</th><th>Header</th></tr></thead><tbody>";
            matchedErrors.forEach((row) => {
                html += `<tr>${row.map((f) => `<td>${f}</td>`).join("")}</tr>`;
            });
            html += "</tbody></table>";
            errList.innerHTML = html;
        } else {
            errList.innerHTML = "无匹配项。";
        }

        // --- 搜索 Facilities ---
        // 匹配 facilities 数组中的任意一个字段
        const matchedFacs = facilities.filter((row) =>
            row.some((field) => field.toLowerCase().includes(query)),
        );

        if (matchedFacs.length > 0) {
            let html =
                '<table border="1" cellpadding="5" style="border-collapse: collapse;">';
            html +=
                "<thead><tr><th>Code</th><th>Facility Name</th></tr></thead><tbody>";
            matchedFacs.forEach((row) => {
                html += `<tr>${row.map((f) => `<td>${f}</td>`).join("")}</tr>`;
            });
            html += "</tbody></table>";
            facList.innerHTML = html;
        } else {
            facList.innerHTML = "无匹配项。";
        }
    }

    // 监听回车键
    document
        .getElementById("searchInput")
        .addEventListener("keypress", function (e) {
            if (e.key === "Enter") doSearch();
        });
</script>
