---
title: "My PERN Understanding"
date: 2023-02-26
---

## Why we choose PERN Stack

My FE team is tasked with creating a simple full stack application. We decided to use PERN stack since our knowledge is with JS which would covered 3 out of 4 tech in the stack.
Short recap of PERN - it is an acronym for PostgreSQL, Express, React and Node. Application using PERN is using Express and PostgreSQL as an application framework, React as a user interface framework and runs on Node.

PERN projects have four distinct tiers:
-a database that keeps track of our data, (PostgreSQL - single source of truth)
-a stateless server that receives commands to manage the database,(Express/Node middleware returning response)
-a client-side server that contains and renders the user interface code, (React/Node)
and the users who run the code in their browsers and send requests to the stateless server.

- ### How We go about setting up a workflow
  We approach our workflow from FE perspective where we consider user story first to design how our data table is going to be. First we wrote the MVP UI, and create server using Express. Then, we connect express server to postgres. Once the two framework connect, we seed our mock data to the database and voila. Time to deployed!
- ### What else we added to out PERN stack to make it work
  We need Knex to write query to postgresSQL and We need to add docker compose and also table plus for the ease of interacting with database.
- ### What are our blockers how did we overcome it
  I start my PERN stack learning by reading documentations and watching videos. Then, I tried to apply the concept to my project, I'll also look at others code or projects to see how they structured their code or how they solved similar problems. I needed to reach out to my mentors when I tried to connect the express to postgres. That's when I learn about docker amd table plus.
