import BackgroundHeader from "@/app/ui/BackgroundHeader";
import About from "@/app/ui/AboutImageWithText";
import Image from "next/image";
import logo from "@/app/public/img/logo.png";
import React from "react";
import AboutImageWithText from "@/app/ui/AboutImageWithText";

export default function Home() {
    return (
        <div className={"pt-12"}>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-amber-400 mb-4">À propos de Lamazon</h1>
                        <p className="text-lg text-gray-700">
                            Bienvenue chez Lamazon, votre boutique dédiée aux peluches de lama. Nous croyons que chaque
                            lama a une histoire
                            à raconter, et c'est pourquoi nous proposons des peluches de haute qualité pour petits et
                            grands.
                        </p>
                    </div>

                    <AboutImageWithText/>

                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">Notre Engagement</h2>
                        <p className="text-gray-700 mb-8">
                            Chez Lamazon, la satisfaction de nos clients est notre priorité. Nous nous engageons à vous
                            offrir des produits
                            de qualité supérieure, fabriqués dans le respect des normes éthiques et environnementales.
                        </p>

                        <p className="text-lg font-semibold text-gray-800">
                            Merci de faire partie de notre aventure lamaesque !
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
