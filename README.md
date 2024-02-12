# Sample Typescript app using Node 18.x.x and DynamoDB

## Getting Started

Install dependencies.
``` pnpm install ```

Set up the environment. Edit with the proper credentials.
``` cp .env.example .env ```

## Testing

To start run
``` serverless offline ```

### Routes

``` /items GET ```
- returns all the items in the DB

``` /items/{id} GET```
- return a single item defined by the id

``` /items PUT ```
- add or update an item to/in the DB
- ``` json
    {
        "id": "1", // should be a string
        "price": 24.99,
        "name": "Test item"
    }
 ``` /items/{id} DELETE ```
 - deletes the specific item defined by the id
 