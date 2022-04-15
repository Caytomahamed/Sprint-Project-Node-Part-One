# Sprint Project Node

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Project.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **how to build web services based on the REST (REpresentational State Transfer) architectural style**. During this sprint, you studied **Node.js and Express, server side routing, how to write Express middleware and how to deploy an API to Heroku**.

In your challenge this week, you will demonstrate your mastery of these skills by designing and creating a web API to manage the following resources: `Movies`, `Stars` and `Ratings`.

This is an individual assessment. All work must be your own. You are not allowed to collaborate during the sprint project.

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should provide an API that has Create, Read, Update and Delete (CRUD) functionality for all `Movies`, `Stars` and `Ratings`.

## Instructions

### Task 1: Project Set Up

- [ ] Run `npm install` to install your dependencies.
- [ ] Reset the database to its original state executing `npm run resetdb`.

### Task 2: Project Requirements (MVP)

Your finished project must include all of the following requirements:

#### Environment Variables

- [ ] Bring the port number from the `process.env` variable, falling back to `9000` if `process.env.PORT` is undefined **!!!**

#### Endpoints

Inside `api/movies/movie-router.js` build the following endpoints:

- [ ] `[GET] /api/movies`
  - Returns an array of movies as the body of the response.
  - If there are no movies it responds with an empty array.
- [ ] `[GET] /api/movies/:id`
  - Returns a movie with the given `id` as the body of the response.
  - If there is no movie with the given `id` it responds with a status code 404.
- [ ] `[POST] /api/movies`
  - Returns the newly created movie ID as a response.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[PUT] /api/movies/:id`
  - Returns the updated movie as the body of the response.
  - If there is no movie with the given `id` it responds with a status code 404.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[DELETE] /api/movies/:id`
  - Returns no response body.
  - If there is no movie with the given `id` it responds with a status code 404.

Inside `api/stars/star-router.js` build the following endpoints:

- [ ] `[GET] /api/stars`
  - Returns an array of stars as the body of the response.
  - If there are no stars it responds with an empty array.
- [ ] `[GET] /api/stars/:id`
  - Returns a star with the given `id` as the body of the response.
  - If there is no star with the given `id` it responds with a status code 404.
- [ ] `[POST] /api/stars`
  - Returns the newly created star ID as a response.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[PUT] /api/stars/:id`
  - Returns the updated star as the body of the response.
  - If there is no star with the given `id` it responds with a status code 404.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[DELETE] /api/stars/:id`
  - Returns no response body.
  - If there is no star with the given `id` it responds with a status code 404.

  Inside `api/ratings/rating-router.js` build the following endpoints:

- [ ] `[GET] /api/ratings`
  - Returns an array of ratings as the body of the response.
  - If there are no ratings it responds with an empty array.
- [ ] `[GET] /api/ratings/:id`
  - Returns a rating with the given `id` as the body of the response.
  - If there is no rating with the given `id` it responds with a status code 404.
- [ ] `[POST] /api/ratings`
  - Returns the newly created rating ID as a response.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[PUT] /api/ratings/:id`
  - Returns the updated rating as the body of the response.
  - If there is no rating with the given `id` it responds with a status code 404.
  - If the request body is missing any of the required fields it responds with a status code 400.
- [ ] `[DELETE] /api/ratings/:id`
  - Returns no response body.
  - If there is no rating with the given `id` it responds with a status code 404.

#### Middleware functions

- [ ] Please look into `middleware/index.js` for instructions

#### Deploy Your Project

- [ ] Once you're done with all changes, make sure to deploy your project to Heroku and make sure to add all the ENVIROMENT VARIABLES needed for Heroku to run.

**Important Notes:**

- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- Use an HTTP client like `HTTPie`, `Postman` or `Insomnia` to manually test the API's endpoints.
- Use Express Routers to organize your endpoints.
- Even though you are only required to write two middleware functions, it is advised that you leverage middlewares as much as possible.
- You are welcome to create additional files, but **do not move or rename existing files** or folders.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work.


## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. The core features of Node.js and Express and why they are useful.
2. Understand and explain the use of Middleware.
3. The basic principles of the REST architectural style.
4. Understand and explain the use of Express Routers.
5. Why do we use `Postman` instead of just the browser.