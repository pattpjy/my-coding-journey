---
title: 1st Full Stack Webapp with PERN Stack
layout: post
banner_image: https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80
---

The team first full stack application journey

My FE team is tasked with creating a simple full stack application. We decided to use PERN stack because our knowledge of Javascript which would covered 3 out of 4 tech in the stack, with combination of these tech allowed us to build a full stack web application with CRUD operations.

## Why we choose PERN Stack

PERN is an acronym for PostgreSQL, Express, React and Node.
[![](https://mermaid.ink/img/pako:eNpNTU1LxDAQ_SthTgrd0iRN0w2yh0WvIuhJchnadD9okpKkuGvpfzeriDKHeW_exyzQ-d6AgmH0H90RQyJve-2CwS6V50geNpsdebpMwcSYuXZ_-E7DP0E78pybbhDuf2IvPqZD1rW7DRRgTbB46vO3JduJhnQ01mhQGfZmwHlMGrRbsxXn5F-vrgOVwmwKmKcek3k84SGgBTXgGPN1Qvfuvf01ZQpqgQsoyUveUCmYYFII3vICrqBqVm4lk4wyUefNmVgL-PwuqMqGVU3D2i2tWdVWlK5fdjZYXA?type=png)](https://mermaid.live/edit#pako:eNpNTU1LxDAQ_SthTgrd0iRN0w2yh0WvIuhJchnadD9okpKkuGvpfzeriDKHeW_exyzQ-d6AgmH0H90RQyJve-2CwS6V50geNpsdebpMwcSYuXZ_-E7DP0E78pybbhDuf2IvPqZD1rW7DRRgTbB46vO3JduJhnQ01mhQGfZmwHlMGrRbsxXn5F-vrgOVwmwKmKcek3k84SGgBTXgGPN1Qvfuvf01ZQpqgQsoyUveUCmYYFII3vICrqBqVm4lk4wyUefNmVgL-PwuqMqGVU3D2i2tWdVWlK5fdjZYXA)

PostgreSQL - It is an Object-Relational Database management system that uses the SQL language combined with many other features that safely store and scale data.

Express - It is a back-end framework for Node.js. used for building web applications and specially APIs. It provides a thin layer of fundamental web application features.Express makes back-end code easier and simpler to write.Creating efficient and robust API is quick and easy.
Allows you to define an error handling middleware.

React - A Front end Framework teaching at Turing. On eo f the requirement for the project is to use react framework. Couples of benefit are Virtual DOM in ReactJS makes user experience better and developer’s work faster. It guarantees stable code.
React allows its components to be reused saving time and effort. Provide the feature of Virtual DOM.

Node.js is Javascript runtime environment for developing server-side and networking applications.

- ### How We go about setting up a workflow
  We approach our workflow from FE perspective where we consider user story first to design how our data table is going to be. First, we wrote the MVP UI, and create the server using Express. Then, we connect express server to postgres. Once the two framework connect, we seed our mock data to the database and voila. Time to deployed!
- ### What else we added to out PERN stack to make it work
  We need Knex to create schema and write query to postgresSQL and we need to add docker compose and also table plus for the ease of interacting with database.
- ### What are our blockers how did we overcome it
- Ops for library than writing code from scratch.
  In our UI, we wanted to have a robust filter function that can filter multiple keywords and also has interactive features. As this function evolved, the code got messier and buggier to a point that we decided use a filter library instead. Our reasoning was, we want to get to the core of the project which is building BE and using a library not only save us time but also, creating more stable feature.
- Changing MVP decision
  As the deadline approach, we had to trim down our MVP to the most basic feature value and forgo some of the design elements we set up at the beginning to be able to deliver a usable product.
- Asking for help
  We were having difficulty with different version of Postgres and the knex documentation that was provided to us. With the help of the Mod4 student, we were also introduce to backend tools, Docker Compose and TablePlus. These tools helps us create Postgres easier and make change to data much more simple.
