# Task 2 – Keshav Software Website

## Project Overview
This project is a professional website for **Keshav Software**.  
It is built using **templating** and a **bundler** to produce reusable, clean HTML pages with modern, responsive design.  

The website includes:
- Home, About, and Contact pages.
- Responsive **Navbar** and Hero section.
- **Feature / Service cards**.
- Footer with copyright information.
- Fully styled with CSS gradients and hover effects.

---

## Templating Engine
- **Engine Chosen:** **Nunjucks**
- **Reason:** Nunjucks enables template reuse across multiple pages (e.g., header, footer) and allows dynamic rendering of static content.
- **Template Location:** `src/templates/`  
  Templates used:
  - `header.njk` – Navbar and navigation logic
  - `footer.njk` – Footer content
  - Page templates like `index.njk`, `about.njk`, `contact.njk`

---

## Bundler / Task Runner
- **Bundler Chosen:** **Vite**
- **Reason:** Vite compiles Nunjucks templates into static HTML files in the `dist/` folder and serves assets efficiently.
- **Build Script:** `build.js` – Converts Nunjucks templates into HTML.

---


## Dependencies
The project requires **Node.js** to be installed.  
The main dependencies used are:
- **Nunjucks**: For templating and generating HTML from `.njk` files.
- **Vite**: For bundling and serving the project locally.

All dependencies are listed in `package.json` and can be installed via **npm**.

---

## How to Run the Project
1. Install dependencies using `npm install`.
2. Compile the templates and generate the HTML output by running the build script `npm run build`.  
   This creates the `dist/` folder with all compiled HTML files and assets.
3. To view the project locally, run `npm start`.  
   This will serve the `dist/` folder on a local server so you can see the website in your browser.
4. Any changes in the source templates or assets require re-running the build script to update the `dist/` folder.

## ScreenShots

## Home Page
![image alt](https://github.com/NavyaSree35/task2-keshavsoftware-navyasree/blob/2f83e79afafe90ce8e558fc70da0fd919e836ed1/Home%20Page.png)

## About Page
![image alt](https://github.com/NavyaSree35/task2-keshavsoftware-navyasree/blob/6a11b08fa60c885956114c3600182b1db8cf1f38/About%20page.png)

## Contact Page
![image alt](https://github.com/NavyaSree35/task2-keshavsoftware-navyasree/blob/9e03b03b8a353453d1ba2f28cf97e8c3a8d598d0/Contact%20Page.png)

## Live Link
[View Live Project](https://navyasree35.github.io/task2-keshavsoftware-navyasree/)

