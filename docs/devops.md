## Instamotion DevOps Engineer Task

### Situation

Car dealership is digitalising their business. They want to build an online order system to tackle with current challenge.
As one of the devops engineers in the project, your task is to deploy services that were developed by the development team
and make it available on the internet.

## Below are information given by the development team

### Global environment requirement

- start a mongodb instance, reachable for backend

### How to start the backend?

- required nodejs 16
- set environment variable
  - `MONGODB_URL="<mongodb connection url>"` - where `<mongodb connection url>` must match the [official mongodb node driver uri](https://docs.mongodb.com/drivers/node/current/fundamentals/connection/#connection-uri)
- navigate to backend directory `cd backend`
- build using npm `npm install`
- start using node `node index.js`

### How to start the frontend?

- navigate to frontend directory `cd frontend`
- modify the variable `backendUrl` to the actual backend endpoint
- serve the http server root from `frontend/`

## Requirements

- Working and publicly reachable frontend application.
- Setup recovery and monitoring for the services.
- Documentation for the deployment plan.
- Use Terraform for consistent and replicable infrastructure.
- Dockerize the services for better portability.

## Some of the free resources you can use

- [MongoDB](https://www.mongodb.com/)
- [heroku](https://www.heroku.com/)
- [netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Terraform](https://www.terraform.io/)

