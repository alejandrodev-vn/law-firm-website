#!/usr/bin/env node
/**
 * Structural verification that shipped source files use tablet/mobile
 * responsive layout patterns (not just presence of sm:/md: strings).
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");

const failures = [];

function read(rel) {
  const path = join(src, rel);
  if (!existsSync(path)) {
    failures.push(`MISSING file: ${rel}`);
    return null;
  }
  return readFileSync(path, "utf8");
}

function assert(rel, condition, message) {
  if (!condition) failures.push(`FAIL ${rel}: ${message}`);
}

function hasAll(content, patterns, label) {
  for (const pattern of patterns) {
    if (!pattern.test(content)) {
      failures.push(`FAIL ${label}: missing pattern ${pattern}`);
      return false;
    }
  }
  return true;
}

// --- Header: desktop nav at md+, hamburger only below md ---
const header = read("components/Header.tsx");
if (header) {
  assert(
    "components/Header.tsx",
    /className="hidden items-center[^"]*md:flex/.test(header),
    'desktop nav must use "hidden ... md:flex" so tablet shows full nav'
  );
  assert(
    "components/Header.tsx",
    /className="[^"]*md:hidden/.test(header) &&
      header.match(/md:hidden/g).length >= 2,
    "mobile menu toggle and panel must use md:hidden (not lg:hidden)"
  );
  assert(
    "components/Header.tsx",
    !/lg:hidden/.test(header.replace(/lg:max-w-\[12rem\]/, "")),
    "header must not rely on lg:hidden for mobile menu (tablet needs desktop nav)"
  );
}

// --- Practice area grids: explicit md:grid-cols-2 before lg:3 ---
for (const rel of [
  "app/[locale]/page.tsx",
  "app/[locale]/practice-areas/page.tsx",
]) {
  const content = read(rel);
  if (!content) continue;
  const gridMatch = content.match(/className="[^"]*grid[^"]*"/);
  assert(
    rel,
    gridMatch && /\bmd:grid-cols-2\b/.test(gridMatch[0]),
    "practice grid must include md:grid-cols-2 for tablet two-column layout"
  );
  assert(
    rel,
    gridMatch && /\blg:grid-cols-3\b/.test(gridMatch[0]),
    "practice grid must include lg:grid-cols-3 for desktop three-column layout"
  );
}

// --- Two-column page splits at md ---
for (const rel of [
  "app/[locale]/about/page.tsx",
  "app/[locale]/contact/page.tsx",
]) {
  const content = read(rel);
  if (!content) continue;
  assert(rel, /\bmd:grid-cols-2\b/.test(content), "two-column split must use md:grid-cols-2");
}

// --- Detail pages: progressive section padding + horizontal px ---
for (const rel of [
  "app/[locale]/news/[slug]/page.tsx",
  "app/[locale]/practice-areas/[slug]/page.tsx",
]) {
  const content = read(rel);
  if (!content) continue;
  assert(
    rel,
    /\bpy-16\b/.test(content) && /\bsm:py-20\b/.test(content) && /\bmd:py-28\b/.test(content),
    "detail section must use py-16 sm:py-20 md:py-28 progressive padding"
  );
  assert(
    rel,
    /\bpx-4\b/.test(content) && /\bmd:px-6\b/.test(content) && /\blg:px-8\b/.test(content),
    "detail container must use px-4 md:px-6 lg:px-8"
  );
}

// --- Footer bottom bar tablet padding ---
const footer = read("components/Footer.tsx");
if (footer) {
  const bottomBar = footer.match(
    /border-t border-white\/10[\s\S]*?<div className="([^"]+)"/
  );
  assert(
    "components/Footer.tsx",
    bottomBar && /\bmd:px-6\b/.test(bottomBar[1]),
    "footer copyright bar must include md:px-6 for tablet padding"
  );
}

// --- Component grids: md breakpoint on primary layouts ---
const layoutChecks = [
  {
    rel: "components/PhilosophySection.tsx",
    pattern: /\bmd:grid-cols-2\b/,
    msg: "philosophy grid must use md:grid-cols-2",
  },
  {
    rel: "components/ClientsSection.tsx",
    pattern: /\bmd:grid-cols-2\b/,
    msg: "clients outer grid must use md:grid-cols-2",
  },
  {
    rel: "components/ProcessSection.tsx",
    pattern: /\bmd:grid-cols-2\b/,
    msg: "process steps must use md:grid-cols-2",
  },
  {
    rel: "components/Footer.tsx",
    pattern: /\bmd:grid-cols-2\b/,
    msg: "footer must use md:grid-cols-2",
  },
  {
    rel: "app/[locale]/page.tsx",
    pattern: /\bmd:grid-cols-2\b.*\blg:grid-cols-3\b/,
    msg: "home news grid must use md:grid-cols-2 lg:grid-cols-3",
  },
];

for (const { rel, pattern, msg } of layoutChecks) {
  const content = read(rel);
  if (content) assert(rel, pattern.test(content), msg);
}

// --- Viewport + overflow ---
const layout = read("app/[locale]/layout.tsx");
if (layout) {
  assert("app/[locale]/layout.tsx", /export const viewport/.test(layout), "viewport export required");
}
const globals = read("app/globals.css");
if (globals) {
  assert("app/globals.css", /overflow-x:\s*hidden/.test(globals), "body overflow-x hidden required");
}

if (failures.length > 0) {
  for (const f of failures) console.error(f);
  process.exit(1);
}

console.log("PASS: Header uses md:flex nav + md:hidden mobile menu");
console.log("PASS: Practice grids use md:grid-cols-2 lg:grid-cols-3");
console.log("PASS: Detail pages use progressive py/px at sm/md/lg");
console.log("PASS: Primary layout grids include md: breakpoints for tablet");
console.log("PASS: viewport metadata and overflow-x hidden present");