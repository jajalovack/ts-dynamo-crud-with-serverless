import { dynamodb, TABLE_NAME } from "../config";

const tableName = TABLE_NAME;

export const handler = async (event: any, context: any) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    body = await dynamodb.scan(
      { TableName: tableName }
    ).promise();
    body = body.Items;
  } catch (err: any) {
    statusCode = 400;
    body = err.message;
  }

  return {
    "statusCode": statusCode,
    "headers": headers,
    "body": JSON.stringify(body),
    "isBase64Encoded": false
  };
};
