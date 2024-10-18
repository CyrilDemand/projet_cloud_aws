const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { id } = event.pathParameters;

  // Get product details from DynamoDB
  const getParams = {
    TableName: process.env.TABLE_NAME,
    Key: { id }
  };

  try {
    const data = await dynamoDb.get(getParams).promise();
    if (!data.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Product not found' })
      };
    }

    const imageKey = data.Item.UrlImage.split('/').pop();

    // Delete image from S3
    const s3Params = {
      Bucket: process.env.BUCKET_NAME,
      Key: imageKey
    };

    await s3.deleteObject(s3Params).promise();

    // Delete product from DynamoDB
    const deleteParams = {
      TableName: process.env.TABLE_NAME,
      Key: { id }
    };

    await dynamoDb.delete(deleteParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Product deleted successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not delete product' })
    };
  }
};