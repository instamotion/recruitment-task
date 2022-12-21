# Backend Task

Create a CRUD service that will show the list of vehicles, support adding new vehicles and updating and removing existing ones. You should also create similar endpoints for adding the dealers. Each vehicle should belong to particular dealer. Create additional endpoint for listing all the vehicles of particular dealer.

## Vehicle object should contain at least following properties

- unique id
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
- relation to dealer

## Dealer object should contain at least following properties

- unique id
- date of creation
- date of last update
- dealer name
- relation to vehicle

## Requirements

- Backend should be written using [serverless](https://www.serverless.com/)
- [DynamoDB](https://aws.amazon.com/dynamodb/) should be used as a storage
- API should be done via [GraphQL](https://graphql.org/)
- Use TypeScript for your projects
- Use GraphQL for API
- Add caching layer for the requests where it makes sense
- Use best practices for code structure
- Code is well tested (unit tests are minimum)
- Provide documentation with step by step how to run the project locally
- Design principles such as SOLID, YAGNI, KISS, DRY etc. are being followed
- Design patterns are used where applicable

### Useful resources

- [Build serverless with GraphQL API and DynamoDB](https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb)
- [Running DynamoDB locally](https://docs.aws.amazon.com/en_en/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
