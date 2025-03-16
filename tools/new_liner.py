# 每 80 个字符添加两个\n

with open("input.md", "r", encoding="utf-8") as f:
    content = f.read()

output = ""

for i in range(0, len(content), 80):
    output += content[i : i + 80] + "\n\n"

with open("output.txt", "w", encoding="utf-8") as f:
    f.write(output)
