const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const { id, name, desc, price, imageUrl } = JSON.parse(event.body);

    // Update DynamoDB with product details
    const dynamoParams = {
      TableName: process.env.TABLE_NAME,
      Item: {
        id,
        name,
        desc,
        price,
        UrlImage: imageUrl || null // Use the provided image URL
      }
    };

    await dynamoDb.put(dynamoParams).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Product added successfully' })
    };
  } catch (error) {
    console.log('Error:', error); // Log the error for debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not add product', details: error.message })
    };
  }
}