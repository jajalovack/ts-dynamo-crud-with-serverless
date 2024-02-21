import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb, TABLE_NAME } from "../config";

const tableName = TABLE_NAME;

export const handler = async (event: any, context: any) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await dynamodb.send(
      new DeleteCommand({
          TableName: tableName,
          Key: {
            id: String(event.pathParameters.id),
          },
        })
    );
    body = `Deleted item ${event.pathParameters.id}`;
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