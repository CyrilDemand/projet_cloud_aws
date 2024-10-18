const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    const { id, name, desc, price, image } = JSON.parse(event.body);
    const imageKey = image ? `${id}.jpg` : null; // Assuming the image is a JPEG

    if (image) {
      // Upload image to S3
      const s3Params = {
        Bucket: process.env.BUCKET_NAME,
        Key: imageKey,
        Body: Buffer.from(image, 'base64'),
        ContentType: 'image/jpeg'
      };

      await s3.putObject(s3Params).promise();
    }

    // Update DynamoDB with product details
    const dynamoParams = {
      TableName: process.env.TABLE_NAME,
      Item: {
        id,
        name,
        desc,
        price,
        UrlImage: image ? `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${imageKey}` : null
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
};