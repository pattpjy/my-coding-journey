---
title: Code In Public - Thai Word Game II
layout: post
tags:
  - thaiwordgame
  - fullstack
banner_image: https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
---

 <h1>{{ page.title }}</h1>
# >>Reflection<<

## Start the project by using Next.JS

Next.js is a popular React framework that makes it easy for developers to build server-side rendered web applications. In this blog, I’ll discuss how I use Next.JS in my word game application.

## Why Next.js?

One of the main reasons why I’m using Next.js for this project is to learn about server-side components. With server-side rendering, the performance of the word game is improved by pre-rendering pages that speeds up the load time from the server and sending them to the client.

## Creating Routes with Next.js

Next.js has a directory-based routing system that makes it easy to create and manage routes. I can create a new page by creating a new file in the "pages" directory. For example, if I want to create a "home" page, I can create a file called "index.js" in the "pages" directory. Similarly, to create a "contact" page, I can create a file called "contact.js" in the "pages" directory.

## Adding Images in Next.js

Next.js uses the "next/image" component to optimize images for performance. This component automatically resizes and optimizes images based on the device size and screen resolution.
To use the "next/image" component, I need to provide an image URL and configure its properties. The image URL can be either an absolute URL or a relative path to the image file in our project.
Next.js also provides a configuration object that can be uses to customize the image properties. I can configure properties such as the image size, quality, and layout.

## Creating Sample Audio Files

For this project, I create a couple sample audio files using QuickTime and GarageBand. I can create a new audio file in GarageBand, make some edits, and export it as an MP3 or M4A file. MP3 is a more widely used format, but M4A is a higher quality format that is compatible with Apple devices.

## Handling Audio Files in Next.js

To add an audio file to our web app, my choices are either the HTML audio tag or the JavaScript audio constructor. The HTML audio tag is easier to use, but the JavaScript audio constructor gives me more control over the audio playback. Because I will be rendering and referencing multiples audio file on the same page, I decided to use constructor over html tag.
<br>
<br>
I have now completed Phase I of the project and will be moving on to Phase II, which involves the creation of the server and database. Please stay tuned for more updates.

[Github](https://github.com/pattpjy/word-game)
