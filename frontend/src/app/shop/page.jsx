'use client'

import React, {useEffect} from 'react';
import ProductCard from "@/app/ui/ProductCard";
import getProduct from "@/app/lib/peluches";
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = React.useState([]);
    const basket = useSelector((state) => state.basket.value);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProduct();
            setProducts(products);
        };
        fetchProducts();
    }, []);
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Nos Produits</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Home;
