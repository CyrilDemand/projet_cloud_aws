"use client"

import { useEffect, useState } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

export default function Home() {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const clientId = 'tonClientId'; // Remplace par ton Client ID Cognito
            const clientSecret = 'tonClientSecret'; // Optionnel si tu as configuré un secret
            const redirectUri = 'http://localhost:3000/'; // Doit correspondre à la callback URL configurée dans Cognito

            // URL pour échanger le code contre des tokens
            const tokenUrl = `https://${cognitoDomain}/oauth2/token`;

            // Échange du code contre des tokens via une requête POST
            fetch(tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    grant_type: 'authorization_code',
                    client_id: clientId,
                    code: code,
                    redirect_uri: redirectUri,
                    client_secret: clientSecret, // Ajoute cette ligne si tu utilises un secret client
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.access_token) {
                        setUserToken(data.access_token);
                        sessionStorage.setItem('userToken', data.access_token);
                    }
                })
                .catch(error => console.error('Error fetching token:', error));
        }
    }, []);

    return (
        <div>
            <h1>Bienvenue sur la page d'accueil</h1>
            {userToken ? (
                <p>Utilisateur connecté avec token: {userToken}</p>
            ) : (
                <p>Non connecté</p>
            )}
        </div>
    );
}
