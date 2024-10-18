import React from "react";

export default function TextInput({type, id, placeholder, onChange}) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Nom</label>
            <input
                type={type}
                id={id}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder={placeholder}
            />
        </div>
    )
}