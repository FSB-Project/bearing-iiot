# Design Style Guide

This project utilizes a color identity based on the **Atlassian Jira** design system, optimized for both Light and Dark modes.

## 🎨 Color Palette (Jira Inspired)

### 1. Light Mode
*   **Primary Blue**: `#0052CC` (Used for Header and primary links).
*   **Background**: `#FFFFFF`.
*   **Surface/Sidebar**: `#F4F5F7`.
*   **Primary Text**: `#172B4D` (N800 - High contrast).
*   **Secondary Text**: `#42526E` (N500).

### 2. Dark Mode
*   **Primary Blue**: `#579DFF` (Lighter blue for visibility on dark backgrounds).
*   **Background**: `#1D2125`.
*   **Surface**: `#22272B`.
*   **Primary Text**: `#C1C7D0` (Ensures visibility).
*   **Secondary Text**: `#8C9BAB`.

---

## 📏 Maintenance Rules

To maintain consistency and readability, all interface changes or new content additions must adhere to the following rules:

1.  **Contrast**:
    *   Never use light gray text on a white background.
    *   In Dark mode, primary text must use light `Neutral` tones (like `#C1C7D0`) to avoid eye strain.
2.  **Use Design Tokens**:
    *   Prioritize using CSS variables defined in `stylesheets/extra.css` instead of hard-coding hex values.
    *   Example: Use `var(--md-typeset-color)` for text.
3.  **Admonitions**:
    *   Use `!!! note`, `!!! info`, `!!! warning` blocks to distinguish content, ensuring their background colors do not conflict with the Jira Dark theme.
4.  **CSS File Structure**:
    *   All interface customizations are centralized in `docs/stylesheets/extra.css`.
    *   Do not modify core theme files directly.

---

## 🛠 Testing Guide
Run the local preview command to ensure colors display correctly in both modes:
```bash
mkdocs serve
```
Use the ☀️/🌙 icon in the Header to toggle between themes.
