import React from "react";
import TextInput from "@/app/ui/form/TextInput";
import TextArea from "@/app/ui/form/TextArea";

export default function Formulaire({ title, formInputs}) {
    return (
        <div className="bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
            <form>
                {formInputs.map((input) => {
                    // Condition pour choisir entre TextInput et TextArea
                    if (input.typeInput === "TextInput") {
                        return (
                            <TextInput
                                key={input.id}
                                id={input.id}
                                type={input.type}
                                placeholder={input.placeholder}
                            />
                        );
                    } else if (input.typeInput === "TextArea") {
                        return (
                            <TextArea
                                key={input.id}
                                rows={input.rows}
                                id={input.id}
                                placeholder={input.placeholder}
                            />
                        );
                    }
                    return null;
                })}
                <button
                    type="submit"
                    className="w-full text-white bg-amber-400 px-4 py-2 rounded-lg hover:bg-amber-500 transition"
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}
