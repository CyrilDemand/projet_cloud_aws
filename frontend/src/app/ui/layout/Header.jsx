'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { selectUserInfo } from '@/features/auth/userSlice'; // Import du sélecteur pour userInfo

const Header = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // Récupérer les infos de l'utilisateur depuis le store Redux
    const userInfo = useSelector(selectUserInfo);

    // Récupérer la taille du panier depuis le store Redux
    const basketSize = useSelector((state) => state.basket.size);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-amber-400">
            <div className="container mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold tracking-wider">
                    Lamazon<span className="text-yellow-300">.</span>
                </Link>

                {/* Navigation */}
                <nav className="space-x-6">
                    <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
                    <Link href="/shop" className="hover:text-yellow-300 transition">Shop</Link>
                    <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
                    <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
                </nav>

                {/* Cart & Account */}
                <div className="flex flex-wrap space-x-6 justify-between">
                    <Link href="/basket" className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H3m4 8a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
                            />
                        </svg>
                        <span className="text-sm text-gray-500">{basketSize}</span>
                        <span>Cart</span>
                    </Link>
                    <Link href="/account" className="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>{userInfo ? `${userInfo.family_name} ${userInfo.given_name}` : "Account" }</span>
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
