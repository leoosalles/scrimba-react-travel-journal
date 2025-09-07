# 🌍 Travel Journal React Project

**Travel Journal** is a front-end web project built with **React**, showcasing **dynamic rendering**, **component-based design**, and **responsive styling**. Developed with **React 18**, **JSX**, **JavaScript (ES6+)**, and **modern CSS**, it emphasizes **clean layout**, **accessibility**, and **reusable components**.

The application presents multiple travel entries, each featuring images, location details, trip dates, and links to Google Maps. **Data** is stored in a separate module and mapped dynamically, demonstrating **props handling** and **list rendering** in React. **Flexbox layouts** and **semantic HTML** ensures **responsiveness** and **accessibility** across devices.

This project was developed as part of the *Learn React* module within the *Frontend Development* specialization offered by **Scrimba** on **Coursera**, highlighting **React fundamentals**, **component architecture**, **front-end best practices**.

---

## 📌 Features

- **Component-Based Design** — Header and Entry components for modular, reusable code
- **Dynamic Rendering** — Travel entries generated from a data array using `.map()`
- **Props Handling** — Entry details (images, country, dates, text) passed through props
- **Responsive Layout** — Flexbox-based design optimized for different screen sizes
- **Google Maps Integration** — Direct links to locations for enhanced interactivity
- **Accessible Markup** — Semantic HTML, alt attributes, and clear hierarchy for usability
- **Modern Styling** — Custom CSS with clean typography, spacing, and consistent visuals
- **Reusable Data Structure** — Centralized data module for easy updates and scalability

---

## 🎯 Learning Goals

- Build and organize React components
- Pass and manage props effectively
- Render lists dynamically from external data
- Apply responsive, accessible styling in React projects

---

## 📂 Project Structure

📁 src/
<br>
┃ ┣ 📂 components/
<br>
┃ ┃ ┣ 📄 Entry.jsx
<br>
┃ ┃ ┗ 📄 Header.jsx
<br>
┃ ┣ 📂 data/
<br>
┃ ┃ ┗ 📄 data.js
<br>
┃ ┣ 📂 images/
<br>
┃ ┃ ┣ 🖼️ globe.png
<br>
┃ ┃ ┗ 🖼️ marker.png
<br>
┃ ┣ 📄 App.jsx
<br>
┃ ┣ 📄 index.css
<br>
┃ ┣ 📄 index.jsx
<br>
📄 index.html

---

## 🧱 HTML Structure (index.html)

- Root container `<div id="root"></div>` for mounting the React application
- Main React entry script `<script type="module" src="./src/index.jsx"></script>`
- Entire page structure (header, main content, entries) created via **React components** (`Header`, `Entry`, `App`)
- Component-based layout ensures **reusability** and **modular design**
- Responsive and semantic content rendered dynamically through **JSX**
- Images, text, and links managed via **props** and a centralized data module
- Styles applied with **modern CSS** targeting component classes for a consistent design<br><br>

```html
<div id="root"></div>`
```

**Purpose:** Serves as the root container where the React application will be mounted.

**Benefit:** Provides a single, central DOM node for React to manage, enabling dynamic rendering and component-based updates.

**Explanation:** React's `createRoot` method targets this element to inject the entire application, allowing React to handle all UI changes efficiently without manipulating the DOM manually.<br><br>

```html
<script type="module" src="./src/index.jsx"></script>
```

**Purpose:** Loads the main React entry point as an ES module.

**Benefit:** Ensures modern JavaScript syntax (import/export) is supported and executed in module scope, keeping the code modular and maintainable.

**Explanation:** This script initializes the React app by importing `App` and rendering it into the `#root` element using `createRoot`, establishing the application's starting point.<br><br>

---

## 🎨 CSS Styling – Key Rules

### `*`
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

**Purpose:** Ensures all elements include padding and border in their width and height calculations, and resets default margins and paddings.

**Benefit:** Provides consistent sizing across browsers and a clean starting point for layout design.<br><br>

### `main.container`
```css
main.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    gap: 2em;
    padding: 2em 1.5em;
    margin: 0 auto;
}
```

**Purpose:** Structures the main content area as a vertical flex container with centered alignment and spacing.

**Benefit:** Creates a clean, organized, and responsive layout for all journal entries.<br><br>

### `.header`
```css
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5em;
    background-color: #F55A5A;
    color: #FFFFFF;
    padding: 1rem;
}
```

**Purpose:** Styles the top header section with centered content and visual emphasis.

**Benefit:** Ensures the header is visually appealing, accessible, and clearly separated from the main content.<br><br>

### `article.journal-entry .article-image-container`
```css
article.journal-entry .article-image-container {
    width: 125px;
    height: 168px;
    overflow: hidden;
    border-radius: 5px;
    flex-shrink: 0;
    margin-right: 1.2em;
}
```

**Purpose:** Defines a fixed-size container for entry images with rounded corners and overflow handling.

**Benefit:** Ensures images maintain consistent size and shape without breaking the layout.<br><br>

### `img.article-image`
```css
img.article-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

**Purpose:** Makes the image fill its container while preserving aspect ratio and cropping overflow.

**Benefit:** Displays images consistently, maintaining design integrity regardless of original dimensions.<br><br>

### `.info-container p.entry-text`
```css
.info-container p.entry-text {
    line-height: 1.5;
    font-size: .8rem;
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

**Purpose:** Limits the display text to three lines and truncates the overflow.

**Benefit:** Maintains a neat, uniform layout for entry descriptions, avoiding excessive vertical space.<br><br>
