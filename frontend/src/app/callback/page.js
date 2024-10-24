'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {setUserInfo} from "@/features/auth/userSlice";

export default function Callback() {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code'); // Récupère le code d'autorisation dans l'URL

        if (code) {
            const redirectUri = 'http://localhost:3000/callback'; // URL de redirection après connexion (callback)
            const clientId = '75h79eekdm3451hqri0uusep95'; // Remplace par ton Client ID Cognito
            const cognitoDomain = 'lmzn-domain.auth.eu-west-3.amazoncognito.com'; // Domaine Cognito configuré dans la console AWS
            const clientSecret = 'qic6ol12c9edvlau3i5uqo74245s8m9fjhnkg3880mmablbe158'; // Si tu utilises un secret (sinon, tu peux omettre cela)

            // URL pour échanger le code contre des tokens
            const tokenUrl = `https://${cognitoDomain}/oauth2/token`;

            // Échange du code d'autorisation contre les tokens JWT
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
                    client_secret: clientSecret, // Optionnel, seulement si tu utilises un secret
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.id_token) {
                        // Stocke les tokens et les informations utilisateur dans sessionStorage ou localStorage
                        sessionStorage.setItem('idToken', data.id_token);
                        sessionStorage.setItem('accessToken', data.access_token);
                        sessionStorage.setItem('refreshToken', data.refresh_token);

                        // Décoder le token JWT pour récupérer les informations utilisateur
                        const userInfo = JSON.parse(atob(data.id_token.split('.')[1]));
                        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                        dispatch(setUserInfo(userInfo));
                        // Redirige l'utilisateur vers la page d'accueil après la connexion réussie
                        router.push('/');
                    } else {
                        console.error('Error fetching token:', data);
                    }
                })
                .catch(error => console.error('Error during token exchange:', error));
        } else {
            console.error('Authorization code not found in URL');
        }
    }, [router]);

    return (
        <div>
            <p>Connexion en cours...</p>
        </div>
    );
}
