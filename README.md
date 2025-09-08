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

---

## ⚛️ React Component Code Explanation

### `index.jsx` file

```jsx
import { createRoot } from 'react-dom/client';
```

**Purpose:** Imports the `createRoot` method from React DOM to initialize the React application.

**Benefit:** Provides a modern, concurrent-friendly way to mount the React component tree into the DOM.<br><br>

```jsx
import App from './App';
```

**Purpose:** Imports the main `App` component from the local `App.jsx` file.

**Benefit:** Establishes the root component of the application, allowing all other components to be nested and rendered through it.<br><br>

```jsx
const root = createRoot(document.querySelector('#root'));
```

**Purpose:** Selects the DOM element with the ID `root` and creates  React root for rendering.

**Benefit:** Connects React to the HTML, enabling dynamic updates and efficient virtual DOM rendering.<br><br>

```jsx
root.render(
  <App />
);
```

**Purpose:** Renders the `App` component into the previously created root.

**Benefit:** Displays the full React application in the browser, enabling the component tree to manage UI updates dynamically.<br><br>

### `App.jsx` file

```jsx
import { Header } from "./components/Header";
```

**Purpose:** Imports the named `Header` component from the components folder.

**Benefit:** Enables reuse of a dedicated header UI, keeping the page structure modular and maintainable.<br><br>

```jsx
import { Entry } from "./components/Entry";
```

**Purpose:** Imports the named `Entry` component that renders a single travel entry.

**Benefit:** Promotes separation of concerns by isolating entry presentation logic into own component.<br><br>

```jsx
import data from "./data/data.js";
```

**Purpose:** Imports the default export containing the array of travel entries.

**Benefit:** Keeps content/data decoupled from UI, making updates easier and preventing hard-coded values in components.<br><br>

```jsx
export default function App() {}
```

**Purpose:** Defines the main React function component (`App`) and makes it the default export of the file, so it can be imported and used as the root component of the application.

**Benefit:** Makes `App` the primary component that other modules (e.g., `index.jsx`) can import easily with `import App from './App'`, and centralizes application composition in one place.

**Explanation:** This line defines a React functional component named `App`. As a default export it becomes the main entry point for rendering the entire UI. Insite this function, JSX is returned that composes child components and layout; the function is treated by React as a component that is mounted into the DOM and re-rendered when needed.<br><br>

```jsx
const entryElements = data.map(entry =>
  <Entry
    key={entry.id}
    obj={entry}
  />
);
```

**Purpose:** Transforms the `data` array into an array of `Entry` React elements using `.map()`.

**Benefit:** Enables dynamic, data-driven rendering: any number of entries in `data` becomes a corresponding list of UI elements without manual replication. The `key` prop supports efficient updates, and passing `obj` keeps the child component self-contained.

**Explanation:**
- `.map()` iterates over each object in `data` and returns a JSX `<Entry />` element for every item.
- `key={entry.id}` provides React with a stable identifier for reconciliation, preventing unnecessary re-renders and warnings.
- `obj={entry}` passes the entire entry object as a prop, allowing the `Entry` component to access fields like image, title, dates, and location. This approach works because the data structure matches exactly the props expected by the `Entry` component, avoiding the need to pass each property individually. The result, `entryElements`, is an array of React elements ready to be injected into JSX.<br><br>

```jsx
return (
  <>
   <Header />
    <main className="container">
      {entryElements}
    </main>
  </>
);
```

**Purpose:** Returns the component's JSX tree: a fragment that contains the `Header` and a semantic `main` holding the rendered entries.

**Benefit:** Renders a clean, semantic structure without adding extra wrapper nodes to the DOM (thanks to the fragment). Using `<main className="container">` improves accessibility and ties the layout to CSS styling while `{entryElements}` injects the dynamically created list.

**Explanation:**
- The React fragment shorthand `<>...</>` groups multiple top-level elements without producing an extra DOM element.
- `<Header />` renders the site's header component.
- `<main className="container">` provides the primary content area and connects to the `.container` CSS rules for layout.
- Inside `main`, `{entryElements}` inserts the array of `Entry` components created earlier — React renders each element in order. Together this return value defines the visible structure of the app when `App` is mounted.<br><br>

### `Header.jsx` file

```jsx
import globe from "../images/globe.png";
```

**Purpose:** Imports the globe image file to be used as the logo in the header.

**Benefit:** Allows React to handle the image as a module, ensuring correct bundling, path resolution, and optimization during the build process.

**Explanation:** Instead of relying on hard-coded file paths, the image is imported as a JavaScript module. This makes it portable, prevents broken links in different environments, and allows the bundler (like Vite or Webpack) to include and optimize it automatically.<br><br>

```jsx
function Header() {
  return (
    <header className="header">
      <img className="logo" src={globe} alt="Travel Journal logo" />
      <h1>my travel journal.</h1>
    </header>
  )
};
```

**Purpose:** Defines a reusable React functional component (`Header`) that renders the top section of the application.

**Benefit:** Encapsulates the header logic and styling in a single component, promoting modular design, reusability, and consistency across the project.

**Explanation:** The `Header` function returns JSX with a semantic `<header>` element styled by the `header` class. Inside, an `<img>` tag displays the imported globe logo with `alt` text for accessibility, and an `<h1>` provides the title "my travel journal". This structure creates a clear, accessible header that can be easily reused or modified independently of other components.<br><br>

```jsx
export { Header }
```

**Purpose:** Exports the `Header` component for use in other parts of the application.

**Benefit:** Enables modular development by making the `Header` available to be imported into `App.jsx` or other files, maintaining clean separation of concerns.

**Explanation:** Using a named export (`export { Header }`) allows the component to be explicitly imported where needed. This improves clarity and avoids conflicts, since only the components explicitly exported are available for reuse.<br><br>

### `Entry.jsx` file

```jsx
import marker from "../images/marker.png";
```

**Purpose:** Imports the marker image to be displayed as a map location icon within each journal entry.

**Benefit:** Ensures the image is bundled, optimized, and its path correctly resolved by the build tool.

**Explanation:** By importing the image as a module, React (via the bundler) manages it reliably across environments, ensuring consistent asset handling and reducing risk of broken paths.<br><br>

```jsx
function Entry(props) {
    console.log(props)
    return (
        <article className="journal-entry">
            <div className="article-image-container">
                <img className="article-image" src={props.obj.img.src} alt={props.obj.img.alt} />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src={marker}
                    alt="Map marker icon"
                />
                <span className="country">{props.obj.country}</span>
                <a href={props.obj.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.obj.title}</h2>
                <p className="trip-dates">{props.obj.dates}</p>
                <p className="entry-text">{props.obj.text}</p>
            </div>
        </article>
    )
};
```

**Purpose:** Defines the `Entry` functional component, responsible for rendering an individual travel entry using the data passed via `props`.

**Benefit:** Encapsulates the logic and layout for each travel record, making the application modular, reusable, and easy to scale with multiple entries.

**Explanation:**
- The `props` parameter receives data for a specific entry (image, country, title, dates, text).
- The JSX structure starts with `<article>` for semantic grouping of each entry.
- The first `<div>` (`article-image-container`) wraps the travel image, ensuring consistent sizing and styling.
- The second `<div>` (`info-container`) holds entry details: a marker icon, country name, Google Maps link, title, trip dates, and descriptive text.
- Using `props.obj` ensures that all entry details are dynamically rendered based on the passed data object.<br><br>

```jsx
export { Entry }
```

**Purpose:** Exports the `Entry` component so it can be imported into other files like `App.jsx`.

**Benefit:** Supports modular code organization by making this component reusable across the project.

**Explanation:** A named export (`export { Entry }`) allows the `Entry` component to be imported with clear intent, maintaining consistency and avoiding namespace conflicts.<br><br>

---

## 📊 Centralized Travel Data Source

### `data.js` file

```js
export default [
  {
    id: 1,
    img: {
      src: "https://scrimba.com/links/travel-journal-japan-image-url",
      alt: "Mount Fuji"
    },
    title: "Mount Fuji",
    country: "Japan",
    googleMapsLink: "https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
  },
  ...
]
```

**Purpose:** Defines and exports an array of objects containing travel entry data.

**Benefit:** Centralizes the data structure, making it easy to manage, scale, and reuse across the application.

**Explanation:**
- Each object represents a travel entry with unique properties (`id`, `img`, `title`, `country`, `googleMapsLink`, `dates`, `text`).
- `id` provides a unique identifier for React's list rendering.
- `img` groups the image source URL and alt text, ensuring both visual display and accessibility.
- `country`, `title`, `dates`, and `text` provide essential details for each entry.
- `googleMapsLink` connects the entry to an external resource, enhancing interactivity.
- Exporting this array as the default export allows `App.jsx` to import and map through the data dynamically, generating multiple `Entry` components without hard-coding.

---

## 🛠 Tech Stack

- **React 18** — component-based UI development
- **JSX** — declarative syntax for rendering UI elements
- **JavaScript (ES6+)** — modern features for dynamic behavior
- **CSS3** — responsive layouts, typography, and component styling
- **Flexbox** — alignment and structure for adaptive design
- **Semantic HTML5** — accessible and meaningful markup

---

## 🙋 About the Author

Developed by **Leonardo Salles de Oliveira**, a technology enthusiast with a passion for design, accessibility, clean code, and inclusive user interfaces.

💼 [LinkedIn](https://www.linkedin.com/in/leonardosalles/)
