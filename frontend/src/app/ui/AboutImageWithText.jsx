import React from 'react';
import logo from "@/app/public/img/logo.png"
import Image from "next/image";
import Link from "next/link";

const AboutImageWithText = ({ isHomePage = false }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image Section */}
            <div className="flex justify-center">
                <Image
                    src={logo}
                    alt="Our Story"
                    className="rounded-full shadow-md"
                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-amber-400 mb-4">Notre Histoire</h2>
                <p className="text-gray-700 mb-4">
                    Lamazon est né de la passion pour les lamas et la douceur. Fondée en 2023, notre mission
                    est simple : offrir les
                    meilleures peluches de lama au monde. Chaque peluche est conçue avec amour et attention,
                    pour apporter du bonheur
                    à ceux qui les adoptent.
                </p>
                <p className="text-gray-700">
                    Que vous soyez un collectionneur passionné ou que vous cherchiez le cadeau parfait,
                    Lamazon est là pour vous.
                    Nous travaillons avec des artisans et des designers du monde entier pour vous proposer
                    des peluches uniques et de
                    qualité exceptionnelle.
                </p>
                {isHomePage && (
                    <div className={"pt-12"}>
                        <Link href="/about" className="hover:text-yellow-300 transition">
                            <button className={"text-2xl bg-amber-400 text-white px-5 py-6"}>En apprendre plus !</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutImageWithText;
