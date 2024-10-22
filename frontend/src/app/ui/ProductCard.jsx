// components/ProductCard.js

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addProductToBasket } from '@/features/basket/basketSlice';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToBasket = (e) => {
        e.preventDefault(); // Empêche le clic de rediriger vers la page de produit
        dispatch(addProductToBasket(product.id)); // Ajoute l'ID du produit au panier
    };

    return (
        <Link href={`/shop/product/${product.id}`}>
            <div className="border rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={product.img}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                    />
                </div>
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <p className="text-xl font-semibold text-amber-400 mb-4">${product.price?.toFixed(2)}</p>
                <button
                    className="w-full bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-500 transition"
                    onClick={handleAddToBasket}  // Ajoute au panier lorsque cliqué
                >
                    Ajouter au panier
                </button>
            </div>
        </Link>
    );
};

export default ProductCard;
