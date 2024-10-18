import React from "react";

export default function TextArea({rows, id, placeholder, onChange}) {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
                id={id}
                rows={rows}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder={placeholder}
            ></textarea>
        </div>
    )
}