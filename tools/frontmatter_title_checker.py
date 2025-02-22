# 检查 content\post 下的 index.md 的 title 内的中英混合空格
# pip install python-frontmatter
import os
import re

import frontmatter


def check_space_between_chinese_and_english(text):
    # 用正则表达式检查中英文字符间是否没有空格
    pattern = re.compile(r"([a-zA-Z])([^a-zA-Z\s])|([^a-zA-Z\s])([a-zA-Z])")
    # 如果匹配到符合条件的字符对，说明中英文之间没有空格，返回 False
    if pattern.search(text):
        return False
    return True


index_paths = []

for root, dirs, files in os.walk("content\\post\\"):
    for file in files:
        if file == "index.md":
            index_paths.append(os.path.join(root, file))

for index_path in index_paths:
    with open(index_path, "r", encoding="utf-8") as f:
        post = frontmatter.load(f)
    if not check_space_between_chinese_and_english(post["title"]):
        print(f"{index_path}: {post['title']}")
