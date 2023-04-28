---
title: GraphQL vs Rest
layout: post
banner_image: https://images.unsplash.com/photo-1646617747563-4f080bddf282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80
---

I recently worked on a small project that involved consuming GitHub's GraphQL API to display specific users' public repositories. This project was a great opportunity for me to learn about GraphQL and how it differs from REST API. In this reflection blog, I will share my experience of using GraphQL API and the challenges I faced during the project.

One of the biggest challenges I faced while learning to use GitHub's GraphQL explorer was understanding how the data was structured. It was a little overwhelming at first, but I overcame this challenge by watching a few YouTube videos and reading through other developers' GitHub repositories. Once I got the hang of it, I found GraphQL to be quite powerful.

For those who may not be familiar, REST is a popular architectural style used in designing and developing web services. It involves the use of HTTP protocol for communication and works on the principle of stateless communication. The resources are accessed using HTTP methods such as GET, POST, PUT, DELETE, etc., and the response from the server is usually sent in JSON, XML, or HTML format.

On the other hand, GraphQL is a query language created by Facebook that allows clients to request only the required data. Unlike REST, which returns all the data present in the resource, GraphQL has a strongly-typed schema that defines the data structure of the API. Clients can request data by specifying the required fields in the query.

The main differences between GraphQL and REST APIs are:

- Data fetching: GraphQL allows the client to fetch only the required data, while REST returns all the data present in the resource.
- Schema: GraphQL has a strongly-typed schema that defines the data structure of the API, while REST has no schema.
- HTTP requests: REST APIs use different HTTP methods to access resources, while GraphQL uses a single endpoint for all requests.
- Response format: REST APIs usually return data in JSON, XML, or HTML format, while GraphQL always returns data in JSON format.
- Caching: REST APIs have better caching support due to the use of HTTP caching mechanisms, while GraphQL does not have native support for caching.

In conclusion, both GraphQL and REST have their own advantages and disadvantages, and the choice between the two depends on the specific requirements of the project. My experience of using GitHub's GraphQL API was quite positive, and it was interesting to see the data available from GitHub. Overall, this project helped me broaden my knowledge and experience of working with different APIs, which will certainly come in handy in my future development projects.

Link to [GitHub](https://github.com/pattpjy/try_graphql) repo
