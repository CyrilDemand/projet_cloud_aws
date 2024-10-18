import React from 'react';
import Formulaire from "@/app/ui/form/Formulaire";
import InformationContact from "@/app/ui/InformationContact";
import {formInputs} from "@/app/lib/contact/constantes";

export default function Home() {
    return (
        <section className={"pt-12"}>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-amber-400 mb-4">Nous Contacter</h1>
                        <p className="text-lg text-gray-700">
                            Si vous avez des questions ou besoin d'informations supplémentaires, n'hésitez pas à nous
                            contacter.
                        </p>
                    </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Formulaire title={"Vous voulez nous contacter ?"} formInputs={formInputs}/>
                            <InformationContact/>
                        </div>
                    </div>
                </div>
        </section>
);
};