const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const params = {
        TableName: process.env.TABLE_NAME,  // Nom de la table passé dans les variables d'environnement
        Key: {
            id: event.queryStringParameters.id  // Récupère l'ID du produit depuis les paramètres de requête
        }
    };

    try {
        const data = await dynamo.get(params).promise();
        if (data.Item) {
            return {
                statusCode: 200,
                body: JSON.stringify(data.Item),
            };
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Product not found' }),
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Could not retrieve product' }),
        };
    }
};
