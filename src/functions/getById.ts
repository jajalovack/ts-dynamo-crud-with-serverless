import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb, TABLE_NAME } from "../config";

const tableName = TABLE_NAME;

export const handler = async (event: any, context: any) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    body = await dynamodb.send(
      new GetCommand({
          TableName: tableName,
          Key: {
            id: event.pathParameters.id,
          },
        })
    );
    body = body.Item;
    if (!body)
    {
      body = {
        message: "Item does not exist."
      }
      statusCode = 404
    }
  } catch (err: any) {
    statusCode = 400;
    body = err.message;
  }
  
  return {
    "statusCode": statusCode,
    "body": JSON.stringify(body),
    "headers": headers,
    "isBase64Encoded": false
  }
};
