import { useRouter } from 'next/router'
import React, {useEffect} from "react";
import getPeluches from "@/app/lib/peluches";
import ProductCard from "@/app/ui/ProductCard";


const Home = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Produit {id}</h1>
        </div>
    );
};

export default Home;
