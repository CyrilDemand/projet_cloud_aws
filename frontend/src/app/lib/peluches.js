import peluches from "@/app/public/img/peluche.jpg"

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
}