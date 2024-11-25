# ejsSyntax and tags
A quick app to practice EJS Syntax and how to use it

This project is a simple web application built with Node.js, Express.js, and EJS to practice using EJS tags and syntax. The goal of this project is to understand how to use EJS for rendering dynamic content in a web page.

# Project Description
The application runs a local server using Express.js and dynamically renders an HTML page using EJS. The server sends data such as the current second, an array of items, and an HTML string to the front end, which is then displayed using EJS tags. This allows you to practice embedding JavaScript into HTML to create dynamic pages.

# Features
Dynamic Rendering with EJS:

The index.ejs file uses different types of EJS tags (<%=, <%-, <%) to render variables, conditionally render content, iterate over arrays, and include other components.
Conditional Content Rendering:

The content changes depending on whether the current second is even or odd. This helps you practice using conditionals within EJS to modify the page's output.
Iteration through Arrays:

The code iterates through an array of items and renders each item in a list. This helps in understanding how to use loops to dynamically render repeated elements on a web page.
Reusable Components with Partials:


# EJS Tags:

- <%= %>: Outputs the content of a variable.
- <%- %>: Outputs content, including HTML (useful for rendering HTML code).
- <% %>: Executes JavaScript code without rendering anything to the page.
- The footer is included as a partial using <%- include("footer.ejs") %>, which makes it reusable across different pages.
