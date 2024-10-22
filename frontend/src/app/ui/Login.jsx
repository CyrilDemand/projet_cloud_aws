import { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
        const redirectUri = 'http://localhost:3000/callback'; // URL de redirection après connexion (callback)
        const clientId = '5s9uguc9l4ao3ar3a70g6tduep'; // Remplace par ton Client ID Cognito
        const cognitoDomain = 'lmzn-domain.auth.eu-west-3.amazoncognito.com'; // Domaine Cognito configuré dans la console AWS
        const loginUrl = `https://${cognitoDomain}/login?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

        // Redirection vers la page de login Cognito
        window.location.href = loginUrl;
    }, []);

    return (
        <div>
            <p>Redirection vers Cognito...</p>
        </div>
    );
}
