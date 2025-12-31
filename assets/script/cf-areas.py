import json

import requests

summary_url = "https://www.cloudflarestatus.com/api/v2/summary.json"

summary = requests.get(summary_url).json()

areas = []

for i in summary["components"]:
    name = i["name"]
    if "-" in name and "(" in name and ")" in name:
        areas.append(name)

print(areas)

with open("cf-areas.json", "w", encoding="utf-8") as f:
    json.dump(areas, f, ensure_ascii=False)
