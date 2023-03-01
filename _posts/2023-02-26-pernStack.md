---
title: "My PERN Understanding"
date: 2023-02-26
---


## My PERN Understanding
PERN is an acronym for PostgreSQL, Express, React and Node. Application using PERN is using Express and PostgreSQL as an application framework, React as a user interface framwork and runs on Node. PostgreSQL is a single source of truth, express is a middle ware to return responses. 

PERN projects have four distinct tiers:

a database that keeps track of our data,

a stateless server that receives commands to manage the database,

a clientside server that contains and renders the user interface code,

and the users who run the code in their browsers and send requests to the stateless server.






### How We go about setting up a workflow
We decided to have both UI and API in the same repo. We approach our workflow from UI perspective where we consider user story first to design how our data table is going to be. 
### What else we added to out pern stack to make it work
I need Knex to write query and I need to add docker compose and also table plus to make it work
### What are our blockers how did we overcome it
I start my pern stack learning by reading documentation and watch vdo. Then I'll try to apply the concept to my project, I'll also look at others code or projects to see how they structure their code or how they solved similar problem. I needed to reach out to my mentor when I tried to connect the express to postgres. That's when I learn about docker.
