import fs from "fs";
const s = fs.readFileSync("app/courses/[categorySlug]/coursesData.js", "utf8");
const catRe = /^  "([^"]+)": \{/gm;
const cats = [];
let m;
while ((m = catRe.exec(s))) cats.push({ name: m[1], index: m.index });
for (let i = 0; i < cats.length; i++) {
  const start = cats[i].index;
  const end = i + 1 < cats.length ? cats[i + 1].index : s.length;
  const chunk = s.slice(start, end);
  const coursesBlock = chunk.match(/courses:\s*\[([\s\S]*)\]\s*,?\s*\}/);
  if (!coursesBlock) {
    console.log(cats[i].name, "NO COURSES");
    continue;
  }
  // top-level course titles: lines with title after opening of course objects at 8-space indent typically
  const titles = [...chunk.matchAll(/\n      \{\n        title: "([^"]+)"/g)].map((x) => x[1]);
  console.log(cats[i].name + ":", titles.length, "=>", titles.join(", "));
}
