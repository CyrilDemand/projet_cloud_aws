'use client'

import { useRouter } from 'next/navigation'
import React, {useEffect, useState} from "react";
import getProduct from "@/app/lib/peluches";
import ProductCard from "@/app/ui/ProductCard";

export default function Home({ params }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProduct();
            const fetchedProduct = getProduct().filter(p => p.id == params.id);
            console.log(fetchedProduct);
            setProduct(fetchedProduct[0]);
        };
        fetchProducts();
    }, [params.id]);

    return (
        <div className="container mx-auto py-12">
            {/* Section Produit */}
            <ProductCard product={product}/>

            {/* Section Détails supplémentaires */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Spécifications du produit</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Matière :</strong> {product.specs?.material}</li>
                    <li><strong>Taille :</strong> {product.specs?.size}</li>
                    <li><strong>Poids :</strong> {product.specs?.weight}</li>
                    <li><strong>Couleur :</strong> {product.specs?.color}</li>
                </ul>
            </div>

            {/* Section Avis clients */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Avis des clients</h2>
                {product.reviews?.length > 0 ? (
                    <ul className="space-y-4">
                        {product.reviews.map((review, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-900 font-semibold">{review?.author}</p>
                                <p className="text-gray-600">{review?.comment}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun avis pour ce produit.</p>
                )}
            </div>
        </div>
    );
}
