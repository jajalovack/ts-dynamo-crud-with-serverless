import { fromEnv } from "@aws-sdk/credential-providers"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"
import { config } from './config';

const TABLE_NAME = config.TABLE_NAME;
const client = new DynamoDBClient({credentials: fromEnv()})
const dynamodb = DynamoDBDocumentClient.from(client)

export { dynamodb, TABLE_NAME }