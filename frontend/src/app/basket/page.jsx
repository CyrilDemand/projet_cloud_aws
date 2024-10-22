'use client'

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Cart from "@/app/ui/Cart";

export default function Home() {
    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.value);

    return (
        <section className="bg-gray-100 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Mon Panier </h1>
            <div className="container mx-auto">
                <Cart products={basketProducts} />
            </div>
        </section>
    );
}
