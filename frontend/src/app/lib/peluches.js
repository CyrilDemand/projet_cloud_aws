/*import peluches from "@/app/public/img/peluche.jpg"

export default function getProduct(){
    return [
        {
            id:0,
            name: "peluche",
            img: peluches,
            description: "Lorem ipsum dolor sit amet consectetur",
            price: 9.9999,
            specs: {
                material: "100% polyester",
                size: "30 cm",
                weight: "500g",
                color: "Blanc",
            },
            reviews: [
                { author: "Alice", comment: "Super doux et adorable !" },
                { author: "John", comment: "Mon enfant l'adore." },
            ],
        }
    ]
}*/

import axios from "axios"

export default async function getProduct(){
    const productsUrl = "https://ahed3c7k11.execute-api.eu-west-3.amazonaws.com/dev/list_products_lambda";
    const response = await axios.get(productsUrl);
    const data = response.data;
    console.log(data);
    console.log(Array.isArray(data));
    return data;
}