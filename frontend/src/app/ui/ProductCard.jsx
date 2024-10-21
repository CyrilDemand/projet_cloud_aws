import React from 'react';
import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4">
            <Image src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-xl font-semibold text-amber-400 mb-4">${product.price.toFixed(2)}</p>
            <button className="w-full bg-amber-400 text-white py-2 rounded-lg hover:bg-amber-500 transition">
                Ajouter au panier
            </button>
        </div>
    );
};

export default ProductCard;
