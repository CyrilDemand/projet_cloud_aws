'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, clearUserInfo, selectUserInfo } from '@/features/auth/userSlice';
import Login from "@/app/ui/Login";

const Home = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);  // Sélectionne les infos de l'utilisateur depuis le store Redux
    const router = useRouter();

    useEffect(() => {
        // Récupérer les infos de l'utilisateur depuis sessionStorage
        const storedUserInfo = sessionStorage.getItem('userInfo');

        if (storedUserInfo) {
            dispatch(setUserInfo(JSON.parse(storedUserInfo))); // Mettre à jour l'état Redux avec les infos utilisateur
        } else {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
            router.push('/account');
        }
    }, [dispatch, router]);

    // Si l'utilisateur est connecté, afficher ses informations
    if (userInfo) {
        return (
            <div className="container mx-auto py-12">
                <h1 className="text-2xl font-bold mb-4">Bienvenue, {userInfo.name || userInfo.email}</h1>
                <p className="text-lg mb-4">Votre solde est de : {userInfo.account_balance || 0} €</p>

                {/* Ajoute d'autres informations utilisateur ici */}
                <p>Email : {userInfo.email}</p>
                <p>Nom d'utilisateur : {userInfo.username}</p>
                <p>ID utilisateur : {userInfo.sub}</p>

                {/* Bouton de déconnexion */}
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                    onClick={() => {
                        sessionStorage.clear(); // Nettoyer les infos utilisateur dans sessionStorage
                        dispatch(clearUserInfo); // Nettoyer les infos utilisateur dans Redux
                        router.push('/'); // Rediriger vers la page de connexion
                    }}
                >
                    Se déconnecter
                </button>
            </div>
        );
    }else{
        // Si l'utilisateur n'est pas connecté, afficher la page de login
        return (
            <div className="container mx-auto py-12">
                <Login />
            </div>
        );
    }


};

export default Home;
