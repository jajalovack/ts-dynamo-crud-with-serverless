import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { dynamodb, TABLE_NAME } from "../config";

const tableName = TABLE_NAME;

export const handler = async (event: any, context: any) => {
  let body = JSON.parse(event.body);
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    await dynamodb.send(
      new PutCommand({
        TableName: tableName,
        Item: {
          id: body.id,
          price: body.price,
          name: body.name,
        },
      })
    );
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
