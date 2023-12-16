---
title: 'Set Up Theme with SCSS'
layout: post
author: 'Patt Sookmark'
tags:
  - frontend
banner_image: asset/blog-banner/blog-scsstheme.png
---

<img class="blog-banner" src="/asset/blog-banner/blog-scsstheme.png" alt="blog-banner-scsstheme" />

Welcome, guys. This blog is my reference for creating custom themes for React projects. Consider this a quick and handy guide, complete with an example theme file, for those moments when I need a quick refresher or find myself blanking on the specifics.
This blog features a straightforward example of a theme file. It's a convenient resource to ensure I always catch up when defining colors, styles, and other crucial design elements in my React applications. Let's dive in and explore the basics of creating a custom theme that aligns with your design vision.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- A React application set up.
- Basic knowledge of React, SCSS, and CSS Modules.

## Step 1: Setting Up Your Project

If you haven't already, create a React project using Create React App or your preferred setup. Install the necessary dependencies:

```bash
npm install node-sass
```

## Step 2: Creating a SCSS Theme File

In your project, create an SCSS file (e.g., `theme. scss`) where you'll define your custom theme. This is where you'll set color variables and other style rules.

```scss
// theme.scss

$primaryColor: #3498db;
$secondaryColor: #2ecc71;
// Define other variables and styles here
```

## Step 3: Creating Component-Specific Styles with CSS Modules

Create a React component (e.g., `Button.js`) and a corresponding CSS Module file (e.g., `Button.module.scss`). Use the `:local` selector in the module file to define local styles and reference the theme variables.

```jsx
// Button.js

import React from 'react';
import styles from './Button.module.scss';

function Button() {
  return <button className={styles.button}>Click me</button>;
}

export default Button;
```

```scss
// Button.module.scss

@import 'theme';

:local {
  .button {
    background-color: $primaryColor;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: $secondaryColor;
    }
  }
}
```

## Step 4: Importing the SCSS Theme

Import your theme file into your main SCSS file (e.g., `App.scss`) and use the variables to create a cohesive look and feel for your entire application.

```scss
// App.scss

@import 'theme';
@import './Button.module.scss';

body {
  font-family: 'Arial', sans-serif;
  background-color: $secondaryColor;
}

// Additional global styles and theme application
```

## Step 5: Applying the Custom Theme

Ensure that your main SCSS file (`App.scss`) is imported into your React application entry point (e.g., `index.js` or `App.js`) to apply the custom theme globally.

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'; // Import your main SCSS file
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Now, your React components can utilize the custom theme defined in the `theme.scss` file, and the styles are scoped locally using CSS Modules.

Here's a initial setup for a basic theme file in SCSS:

```scss
// theme.scss

// Color Palette
$primaryColor: #3498db;
$secondaryColor: #2ecc71;
$accentColor: #e74c3c;
$textColor: #333;
$backgroundColor: #f8f8f8;

// Typography
$baseFontSize: 16px;
$headingFontFamily: 'Helvetica', sans-serif;
$bodyFontFamily: 'Arial', sans-serif;

// Spacing
$baseSpacing: 8px;
$containerMaxWidth: 1200px;

// Button Styles
$buttonPadding: 10px 15px;
$buttonBorderRadius: 5px;
$buttonPrimaryBackground: $primaryColor;
$buttonPrimaryColor: #fff;
$buttonSecondaryBackground: $secondaryColor;
$buttonSecondaryColor: #fff;

// Input Styles
$inputPadding: 8px;
$inputBorderWidth: 1px;
$inputBorderColor: #ddd;
$inputBorderRadius: 3px;

// Other Styles
$boxShadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

This example included variables for colors, typography, spacing, and basic styles for buttons and inputs. You can customize these variables based on your design preferences. This setup provides a solid foundation for theming and can be expanded as needed for more complex projects.

To use these variables in your components, import the theme file and reference the variables in your styles:

```scss
// Example usage in a component

@import 'theme';

.button {
  background-color: $buttonPrimaryBackground;
  color: $buttonPrimaryColor;
  padding: $buttonPadding;
  border-radius: $buttonBorderRadius;
  cursor: pointer;

  &:hover {
    background-color: $buttonSecondaryBackground;
  }
}

.input {
  padding: $inputPadding;
  border: $inputBorderWidth solid $inputBorderColor;
  border-radius: $inputBorderRadius;
}
```

This structure lets you maintain a consistent and easily modifiable theme across your application. As your project grows, you can extend the theme file with additional variables for specific styles or components.
Creating custom themes in a React application using SCSS and CSS Modules provides a robust and modular way to manage styles. By centralizing theme variables in a dedicated SCSS file and using CSS Modules for component-specific styling, you can achieve consistency and maintainability in your styling approach. Experiment with different variables and styles to create a custom theme that aligns with your application's design vision.
