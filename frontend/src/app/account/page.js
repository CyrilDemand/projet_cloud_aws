'use client'

import React, {useEffect} from 'react';
import ProductCard from "@/app/ui/ProductCard";
import getProduct from "@/app/lib/peluches";
import { useDispatch, useSelector } from 'react-redux';
import Login from "@/app/ui/Login";

const Home = () => {
    return (
        <div className="container mx-auto py-12">
            <Login/>
        </div>
    );
};

export default Home;
