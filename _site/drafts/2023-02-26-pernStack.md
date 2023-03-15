add frontmatter

## Why we choose PERN Stack

My FE team is tasked with creating a simple full stack application. We decided to use PERN stack because our knowledge of Javascript which would covered 3 out of 4 tech in the stack, with combination of these tech allowed us to build a full stack web application with CRUD operations.
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
  We need Knex to write query to postgresSQL and we need to add docker compose and also table plus for the ease of interacting with database.
- ### What are our blockers how did we overcome it
- changing MVP decision
- filter function change to library - writing from scratch to switch to library
- Asking for help - documentation Knex, finding walk through to connect Knex to postgres -
- We also introduce to docker compose and tableplus tools
