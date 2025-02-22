# 检查 content\post 下的 index.md 的 title 内的中英混合空格
# pip install python-frontmatter
# pip install pangu
import os

import frontmatter
import pangu


def check_space_between_chinese_and_english(text):
    spaced = pangu.spacing(text)
    if spaced != text:
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
