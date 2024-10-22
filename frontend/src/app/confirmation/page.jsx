
'use client'
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
    const purchaseSummary = useSelector((state) => state.basket.purchaseSummary);
    if (!purchaseSummary) {
        return (
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-red-600 mb-8">No purchase found!</h1>
                    <p className="text-gray-700">Please go back and make a purchase.</p>
                </div>
            </section>
        );
    }
    return (
        
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-8">Commande confirmée !</h1>
                <div className="bg-white shadow-md rounded-lg p-8 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Merci pour votre achat !</h2>
                    <p className="text-gray-700 mb-4">La commande a été confirmée avec <strong className="text-green-600">succès</strong></p>
                    <p className="text-gray-600 mb-8">Vous recevrez bientôt votre commande dans les <strong>3 à 5 jours ouvrables.</strong></p>
                    <h3 className="text-xl font-semibold mb-4">Récapitulatif de votre achat :</h3>
                    <ul className="text-left">
                        {purchaseSummary.products.map(item => (
                           <li key={item.product.id} className="flex justify-between items-center bg-white p-4 rounded-md border shadow-sm">
                           <span className="text-lg font-medium text-gray-900">{item.product.name}</span>
                           <span className="text-lg font-medium text-gray-700">{item.quantity} x ${item.product.price.toFixed(2)}</span>
                       </li>
                        ))}
                    </ul>
                    <div className="mt-8 border-t pt-4 flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-900">Total :</span>
                            <span className="text-2xl font-bold text-green-600">${purchaseSummary.total.toFixed(2)}</span>
                        </div>
                </div>
            </div>
        </section>
    );
}
