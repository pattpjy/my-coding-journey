---
title: 1st Full Stack Webapp with PERN Stack
layout: post
banner_image: https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80
---

## The team's first full-stack application journey

My FE team was tasked with creating a simple full-stack application. We decided to use Postgres, Express, React, and Node (PERN stack) 

## Why we choose PERN Stack
It is because our knowledge of Javascript would cover three out of four technologies in the stack. The combination of these technologies allowed us to build a full-stack web application with CRUD operations.

PERN is an acronym for Postgres, Express, React, and Node.
[![](https://mermaid.ink/img/pako:eNpNTU1LxDAQ_SthTgrd0iRN0w2yh0WvIuhJchnadD9okpKkuGvpfzeriDKHeW_exyzQ-d6AgmH0H90RQyJve-2CwS6V50geNpsdebpMwcSYuXZ_-E7DP0E78pybbhDuf2IvPqZD1rW7DRRgTbB46vO3JduJhnQ01mhQGfZmwHlMGrRbsxXn5F-vrgOVwmwKmKcek3k84SGgBTXgGPN1Qvfuvf01ZQpqgQsoyUveUCmYYFII3vICrqBqVm4lk4wyUefNmVgL-PwuqMqGVU3D2i2tWdVWlK5fdjZYXA?type=png)](https://mermaid.live/edit#pako:eNpNTU1LxDAQ_SthTgrd0iRN0w2yh0WvIuhJchnadD9okpKkuGvpfzeriDKHeW_exyzQ-d6AgmH0H90RQyJve-2CwS6V50geNpsdebpMwcSYuXZ_-E7DP0E78pybbhDuf2IvPqZD1rW7DRRgTbB46vO3JduJhnQ01mhQGfZmwHlMGrRbsxXn5F-vrgOVwmwKmKcek3k84SGgBTXgGPN1Qvfuvf01ZQpqgQsoyUveUCmYYFII3vICrqBqVm4lk4wyUefNmVgL-PwuqMqGVU3D2i2tWdVWlK5fdjZYXA)

Postgres - It is an object-relational database management system that uses the SQL language. We choose Postgres because it was easy to pick up.

Express - It is a back-end framework for Node.js used for building web applications and especially APIs. We decided to go with Express because it is a javascript framework, the documentation looked fairly straightforward, and because of the support, we have within Turing.

React - A Front end Framework taught at Turing. One of the requirements for the project is to use react framework. Couples of benefits are Virtual DOM in ReactJS makes the user experience better and developers work faster. React allows its components to be reused saving time and effort.

Node.js - A Javascript runtime environment for developing server-side and networking applications.

### How we go about setting up a workflow
  We approach our workflow from the FE perspective where we consider the user story first to design how our data table is going to be. First, we wrote the MVP UI, and create the server using Express. Then, we connect the express server to Postgres. Once the two frameworks re connected, we seed our mock data to the database, and voila. Time to deploy!
### What else we added to our PERN stack to make it work
  We used Knex to create the schema and write queries for Postgres. We used Docker Compose for local development with the database and Table Plus for interacting with the data.
  
### Lessons learned from the project!
- **Opt for a library than writing code from scratch**
  In our UI, we wanted to have a robust filter function that can filter multiple keywords and also has interactive features. As this function evolved, the code got messier and buggier to a point that we decided to use a filter library instead. Our reasoning was, we wanted to get to the core of the project, which was building a backend. Using a library not only saved us time but also created a more stable feature.
- **Changing MVP decision**
  As the deadline approached, we had to trim down our MVP to the most basic feature value and forgo some of the design elements we set up at the beginning to be able to deliver a usable product.
- **Asking for help**
  We were having difficulty with different versions of Postgres and the Knex documentation that was provided to us. With the help of a Mod4 student, we were introduced to backend tools: Docker Compose and TablePlus. These tools make working with Postgres easier and make a change to data much more simple.
