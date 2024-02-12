import { dynamodb, TABLE_NAME } from "../config";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import {
//   DynamoDBDocumentClient,
//   PutCommand,
// } from "@aws-sdk/lib-dynamodb";

// const client = new DynamoDBClient({});

// const dynamo = DynamoDBDocumentClient.from(client);

const tableName = TABLE_NAME;

export const handler = async (event: any, context: any) => {
  let body = JSON.parse(event.body);
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await dynamodb.put(
      {
        TableName: tableName,
        Item: {
          id: body.id,
          price: body.price,
          name: body.name,
        },
      }
    ).promise();
    body = `Put item ${body.id}`;
  } catch (err: any) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    "statusCode": statusCode,
    "headers": headers,
    "body": body,
    "isBase64Encoded": false
  };
};
