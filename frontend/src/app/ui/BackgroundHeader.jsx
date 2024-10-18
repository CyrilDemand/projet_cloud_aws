import React from 'react';
import Link from 'next/link';
import background from "@/app/public/img/background_header.jpg";
import Image from "next/image";

const BackgroundHeader = () => {
    return (
        <div  className="relative w-full h-screen">
            {/* Image d'arrière-plan floue */}
            <Image
                src={background}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="blur-sm"
            />

            {/* Texte centré au milieu de l'image */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
                <h1 className="text-5xl font-bold mb-4">Les ventes à -50%</h1>
                <button className={"text-2xl bg-amber-400 text-white px-5 py-6"}>Voir nos peluches</button>
            </div>
        </div>
    );
};

export default BackgroundHeader;
