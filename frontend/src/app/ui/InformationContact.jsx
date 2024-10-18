import React from "react";

export default function InformationContact() {
    return (
        <div className="flex flex-col justify-center bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Informations de contact</h2>
            <p className="text-gray-700 mb-4">
                Vous pouvez également nous joindre directement par e-mail ou téléphone. Nous serons ravis de vous
                aider.
            </p>

            <p className="text-gray-700">
                <strong>Email :</strong> <a href="mailto:contact@lamazon.com"
                                            className="text-amber-400 hover:underline">contact@lamazon.com</a>
            </p>

            <p className="text-gray-700 mt-4">
                <strong>Téléphone :</strong> <a href="tel:+1234567890" className="text-amber-400 hover:underline">+1
                234 567 890</a>
            </p>

            <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800">Suivez-nous sur les réseaux sociaux</h3>
                <div className="flex space-x-4 mt-4">
                    {/* Icones de réseaux sociaux */}
                    <a href="#" className="text-gray-700 hover:text-amber-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Facebook Icon */}
                            <path
                                d="M22 12a10 10 0 1 0-11.96 9.94v-7h-2v-3h2v-2.2c0-2.07 1.26-3.2 3.11-3.2.9 0 1.84.16 1.84.16v2h-1.04c-1.03 0-1.34.64-1.34 1.29v1.95h2.7l-.43 3h-2.27v7A10 10 0 0 0 22 12z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-amber-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Twitter Icon */}
                            <path
                                d="M24 4.56a9.94 9.94 0 0 1-2.86.78 5.09 5.09 0 0 0 2.23-2.82 9.77 9.77 0 0 1-3.13 1.22A4.92 4.92 0 0 0 16.7 3c-2.73 0-4.94 2.33-4.94 5.2 0 .41.04.8.13 1.17a13.96 13.96 0 0 1-10.15-5.44 5.44 5.44 0 0 0-.67 2.6c0 1.8.87 3.38 2.18 4.31a4.8 4.8 0 0 1-2.23-.65v.06c0 2.51 1.73 4.61 4.02 5.1a5 5 0 0 1-2.21.09c.62 2.03 2.45 3.51 4.61 3.55A9.91 9.91 0 0 1 0 19.54a14.03 14.03 0 0 0 7.55 2.27c9.05 0 14-7.91 14-14.78 0-.23-.01-.46-.03-.69A10.2 10.2 0 0 0 24 4.56z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-amber-400 transition">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Instagram Icon */}
                            <path
                                d="M12 2.16a9.86 9.86 0 0 0-2.82.42 10 10 0 0 0-7.1 7.1 9.86 9.86 0 0 0-.42 2.82c0 1 .15 1.93.42 2.82a10 10 0 0 0 7.1 7.1 9.86 9.86 0 0 0 2.82.42c1 0 1.93-.15 2.82-.42a10 10 0 0 0 7.1-7.1 9.86 9.86 0 0 0 .42-2.82c0-1-.15-1.93-.42-2.82a10 10 0 0 0-7.1-7.1A9.86 9.86 0 0 0 12 2.16zm0 1.68a8.17 8.17 0 0 1 2.32.35 8.27 8.27 0 0 1 5.86 5.86c.22.75.35 1.53.35 2.32s-.12 1.57-.35 2.32a8.27 8.27 0 0 1-5.86 5.86 8.17 8.17 0 0 1-2.32.35 8.17 8.17 0 0 1-2.32-.35 8.27 8.27 0 0 1-5.86-5.86 8.17 8.17 0 0 1-.35-2.32c0-.79.12-1.57.35-2.32a8.27 8.27 0 0 1 5.86-5.86A8.17 8.17 0 0 1 12 3.84zm0 1.68a6.43 6.43 0 0 0-6.35 6.35 6.43 6.43 0 0 0 6.35 6.35 6.43 6.43 0 0 0 6.35-6.35A6.43 6.43 0 0 0 12 5.52zm0 2.52a3.83 3.83 0 1 1-3.83 3.83A3.83 3.83 0 0 1 12 8.04zm4.4-.88a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}