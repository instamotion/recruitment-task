[![instamotion_logo](img/instamotion_logo.png)](https://www.instamotion.com/)

# Recruitment task

Create an CRUD application that will show the list of vehicles on initial load. Application should also support adding new vehicles and updating and removing existing ones.

## Vehicle object should contain at least following properties:

- date of creation
- date of last update
- make - Audi, BMW, VW, Mercedes etc.
- model - A4, A5, 316i, Passat, etc.
- transmission
  - Manual gearbox
  - Semi-automatic
  - Automatic transmission
- fuel type
  - Petrol
  - Diesel
  - Eletric
  - LPG
  - Hybrid
- mileage
- vehicle type
  - Cabriolet
  - Coupe
  - Estate car
  - SUV
  - Saloon
  - Van
  - Small car
  - Other
- vehicle color

## Requirements:

- backend should be written using [serverless](https://www.serverless.com/)
- [Next.js](https://nextjs.org/) should be used for frontend application
- [DynamoDB](https://aws.amazon.com/dynamodb/) should be used as a storage
- communication between backend and frontend should be done via [GraphQL](https://graphql.org/)
- use TypeScript for your projects
- use GraphQL for API
- use best practices for code structure
- make sure your code is well tested
- provide documentation with step by step on how to run the project locally

### Useful resources:

- [Build serverless with GraphQL API and DynamoDB](https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb)
- [Running DynamoDB locally](https://docs.aws.amazon.com/en_en/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

## What will we be paying attention to:

- How you split code for components
- How your manage your data.
- Reusability of the components.
- Code repetitions and reusability (keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and simple [KISS](https://en.wikipedia.org/wiki/KISS_principle)).
- How and where you put your business logic.
- Code optimization and the solution's performance.
- Working in accordance with good practices in general.
- How you communicate with API.
- Handling unexpected errors or potential exceptions.
