# Workflow: Adding Interactive SVG Diagrams

This guide explains how to add new Mermaid diagrams (or other SVGs) to the documentation while ensuring they support:
1.  **Dark/Light Mode** (Adaptive colors).
2.  **Interactive Zoom/Pan** (Google Maps style).
3.  **Responsive Scaling** (No cropping).
4.  **Auto-Text Sizing** (No truncated labels).

## 1. Exporting the Diagram
When expoerting from Mermaid Live Editor or other tools:
-   Select **SVG** format.
-   If possible, choose a "Transparent" background option.

## 2. Cleaning the SVG File (Critical Step)
Open your `.svg` file in a code editor (VS Code) and perform the following cleanups. **Failure to do this will cause cropping or scaling issues.**

### A. Remove "Baked-in" Transforms
Look for the main group tag `<g>` or the root `<svg>` tag. If you see a `transform` attribute with a matrix, **DELETE IT**.

**BAD:**
```xml
<g transform="matrix(1.24, 0, 0, 1.24, -50, -100)"> ... </g>
```

**GOOD:**
```xml
<g> ... </g>
```
*Reason: These transforms hardcode a specific zoom level and shift, often pushing the diagram out of view.*

### B. Ensure ViewBox Exists
The root `<svg>` tag **MUST** have a `viewBox` attribute. This defines the coordinate system.

**MISSING VIEWBOX?**
If your file looks like `<svg width="100%" height="100%">`, you must manually add the viewBox based on the diagram's content size.
```xml
<svg viewBox="0 0 2300 1550" ... >
```
*Tip: You might need to experiment with the numbers to frame your diagram tightly.*

### C. Remove Hardcoded Styles
Delete any inline styles that force a background color or specific theme colors that conflict with Dark Mode.
-   Remove: `background-color: white;` or `background-color: rgb(2,8,23);` from the `<svg>` tag.
-   Remove: `fill: #ffffff` if you want it to adapt (the CSS handles generic overrides).

## 3. Integration into MkDocs
Do **NOT** use the standard `![image](path.svg)` syntax. That creates a static image.

Instead, use the **Snippet** syntax inside a special wrapper div.

### Markdown Syntax
```html
<div class="interactive-diagram" style="width: 100%; aspect-ratio: 2300/1550; border: 1px solid var(--diagram-stroke); overflow: hidden; background-color: var(--diagram-bg);">
  --8<-- "docs/assets/diagrams/your_new_diagram.svg"
</div>
```

**Key Parameters:**
-   `interactive-diagram` class: Activates the Panzoom script and the auto-text centering CSS.
-   `aspect-ratio`: **Crucial**. Set this to match your SVG's `viewBox` ratio (Width / Height). This prevents the bottom from getting cut off.
-   `--8<-- "..."`: This is the MkDocs snippet syntax that embeds the raw SVG code, allowing our CSS to style the internals.

## 4. Automatic Features
You do **not** need to manually fix text widths anymore. The project's `extra.css` contains a "Universal Text Fix":
-   It effectively sets `overflow: visible` on all label boxes.
-   It centers the text and allows it to expand as wide as needed (`max-content`).

Just drop the SVG in, clean the headers, and the code handles the rest!
