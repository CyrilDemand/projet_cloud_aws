
'use client'
import React from 'react';
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { removeProductToBasket,addProductToBasket,ConfirmPurshase } from '@/features/basket/basketSlice';
import { useRouter } from 'next/navigation'
import {ConfirmPurshaseAccountBalance} from "@/features/basket/accountBalanceSlice";
const Cart = ({ products }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleRemoveFromBasket = (productId) => {
        dispatch(removeProductToBasket(productId));
    };
    const handleAddToBasket = (productId) => {
        dispatch(addProductToBasket(productId));
    };
    const handlePurshase = (e) => {
        e.preventDefault();
        dispatch(ConfirmPurshase());
        dispatch(ConfirmPurshaseAccountBalance(products.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)))
        router.push('/confirmation'); 
    };
     
    return (
        <div className="p-6 max-w-lg mx-auto">
            {products.length > 0 ? (
                products.map((item) => (
                    <div key={item.product.id} className="border-b py-4 flex items-center">
                        <div className="relative w-20 h-20 mr-4">
                            <Image
                                src={item.product.UrlImage}
                                alt={item.product.name}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold">{item.product.name}</h3>
                            <p className="text-gray-700">${item.product.price?.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-l-lg hover:bg-gray-400 transition"
                                onClick={() => handleRemoveFromBasket(item.product.id)}
                            >
                                –
                            </button>
                            <span className="px-4 py-2 bg-gray-100 text-gray-800">
                                {item.quantity}
                            </span>
                            <button
                                className="bg-yellow-500 text-gray-800 px-3 py-1 rounded-r-lg hover:bg-gray-400 transition"
                                onClick={() => handleAddToBasket(item.product)}
                            >
                                +
                            </button>
                        </div>

                    </div>
                ))
            ) : (
                <p className="text-gray-700">Votre panier est vide.</p>
            )}
            {products.length > 0 && (
                <div className="mt-6">
                    <p className="text-xl font-semibold">
                        Total : ${products.reduce((total, item) => total + (item.product.price * item.quantity), 0).toFixed(2)}
                    </p>
                    <button onClick={handlePurshase}
                        className="w-full bg-amber-400 text-white py-3 rounded-lg hover:bg-amber-500 transition mt-4">
                        Confirmer vos achats
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
