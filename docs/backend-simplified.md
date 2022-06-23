# Simplified Backend Task

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

- backend should be written using [serverless](https://www.serverless.com/) (you can use either [LocalStack](https://github.com/localstack/localstack) or [Serverless Offline](https://www.npmjs.com/package/serverless-offline) to run it locally)
- [MongoDB](https://www.mongodb.com/) should be used as a storage
- API should be written as REST
- use TypeScript for your projects
- use best practices for code structure
- create API documentation
- make sure your code is well tested
- provide documentation with step by step on how to run the project locally

### Useful resources

- [Serverless Nodejs Rest API with TypeScript And MongoDB](https://www.serverless.com/examples/aws-node-rest-api-typescript)
- [Running DynamoDB locally](https://docs.aws.amazon.com/en_en/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
