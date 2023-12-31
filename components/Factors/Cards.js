import React from "react";
import data from "../../public/Lottie/data.json";
import per from "../../public/Lottie/per.json";
import Card from "./Card";


const cardsData = [
    {
        id: 1,
        fs: "build a personal full ecommerce store with product api",
        title: "What service will we give you?",
        body: "We provide you with a full website along with our premium API service. Which includes API of amazon.in and 1688.com. By taking our API service you are getting thousands of products without any hassle. And you can set the price of the products as you like. So contact us now without delay",
        img: per,
        bg: "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
        url: "/services-dev",

    },
    {
        id: 2,
        fs: "Ecomservice API Key",
        title: "What do you get in this package?",
        body: " Whether you're a dynamic e-commerce player, a market analyst, or a forward-thinking entrepreneur, our API delivers the competitive edge you need. Stay ahead of the curve, make informed decisions, and elevate your business with our comprehensive Amazon and 1688.com  API. Welcome to the future of e-commerce intelligence!",
        img: data,
        bg: "bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500",
        image: ['/service/amazon.png', '/service/1688.png'],
        url: "/services",
    },
    // {
    //     id: 3,
    //     fs: "Multi-device compatibility",
    //     title: "Multi-device compatibility ?",
    //     body: "The website should be optimized for various devices, such as laptops, tablets, and smartphones, to make it accessible for students at all times",
    //     img: mutD,
    //     bg: "bg-gradient-to-r from-green-200 to-green-500",
    // },
    // {
    //     id: 5,
    //     fs: "Get Results",
    //     title: "Result Management System",
    //     body: "Student, Subject, Teacher, Semester, Result and Class from this project. The main objective to develop Result Management System",

    //     img: lottie2,
    //     bg: "bg-gradient-to-r from-rose-300 to-rose-500",

    // },
];
const Cards = () => {
    return (
        <div className="mt-10">
            <div className="space-y-10  px-5 md:px-0 md:w-[800px]  lg:w-[1000px] mx-auto">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id} data={card}>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cards;
