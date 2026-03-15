"use client"
import { useState } from "react";
import FoodItemCard from "../Card/FoodItemCard";
import Image from "next/image";

const menuData = [
    {
        category: "Pizzas",
        id: "Pizzas",
        icon: "/assets/img/menu/icon_pizza.png",
        items: [
            { name: "White Pizza – Foccacia", price: "From $8.00", content: "Small: $8.00, Medium: $10.00, Large: $11.00, XL: $16.00, Party: $21.00", img: "/assets/img/menu/pizza_white_foccacia.png" },
            { name: "Pepperoni (Beef) – Pizza", price: "From $13.00", content: "Small: $13.00, Medium: $16.00, Large: $19.00, XL: $21.00, Party: $33.00", img: "/assets/img/menu/pizza_pepperoni.png" },
            { name: "Tomatoes and Cheese Pizza", price: "From $13.00", content: "Small: $13.00, Medium: $15.00, Large: $17.00, XL: $21.00, Party: $29.00", img: "/assets/img/menu/pizza_tomato_cheese.png" },
            { name: "4 Cheese Pizza", price: "From $15.00", content: "Small: $15.00, Medium: $17.00, Large: $20.00, XL: $23.00, Party: $29.00", img: "/assets/img/menu/pizza_four_cheese.png" },
            { name: "Grilled Chicken – Pizza", price: "From $21.00", content: "Small: $21.00, Medium: $26.00, Large: $30.00, XL: $35.00, Party: $45.00", img: "/assets/img/menu/pizza_grilled_chicken.png" },
            { name: "Vegetable – Pizza", price: "From $13.00", content: "Small: $13.00, Medium: $16.00, Large: $19.00, XL: $24.00, Party: $34.00", img: "/assets/img/menu/pizza_vegetable.png" },
            { name: "Grilled Vegetables – Pizza", price: "From $16.00", content: "Small: $16.00, Medium: $19.00, Large: $21.00, XL: $24.00, Party: $34.00", img: "/assets/img/menu/pizza_grilled_vegetables.png" },
            { name: "Rapini – Pizza", price: "From $16.00", content: "Small: $16.00, Medium: $21.00, Large: $24.00, XL: $26.00, Party: $38.00", img: "/assets/img/menu/pizza_rapini.png" },
            { name: "Four Meat – Pizza", price: "From $16.00", content: "Small: $16.00, Medium: $19.00, Large: $21.00, XL: $26.00, Party: $34.00", img: "/assets/img/menu/pizza_four_meat.png" },
            { name: "Picanthe (allderes) spicy – Pizza", price: "From $15.00", content: "Small: $15.00, Medium: $17.00, Large: $21.00, XL: $24.00, Party: $38.00", img: "/assets/img/menu/pizza_picanthe.png" },
            { name: "Tandoori Chicken – Pizza", price: "From $13.00", content: "Small: $13.00, Medium: $16.00, Large: $19.00, XL: $24.00, Party: $34.00", img: "/assets/img/menu/pizza_tandoori_chicken.png" }
        ]
    },
    {
        category: "Appetizers",
        id: "Sides",
        icon: "/assets/img/menu/icon_wings.png",
        items: [
            { name: "Chicken Wings", price: "$18.00", content: "12pcs / 1lbs", img: "/assets/img/menu/appetizer_chicken_wings.png" },
            { name: "French Fries", price: "From $6.00", content: "Small: $6.00, Medium: $7.00, Large: $9.00", img: "/assets/img/menu/appetizer_french_fries.png" },
            { name: "Potatoes Wedge", price: "From $10.00", content: "Medium: $10.00, Large: $16.00", img: "/assets/img/menu/appetizer_potatoes_wedge.png" },
            { name: "Onion Rings", price: "From $7.00", content: "Small: $7.00, Medium: $9.00", img: "/assets/img/menu/appetizer_onion_rings.png" }
        ]
    },
    {
        category: "Shawarma",
        id: "Shawarma",
        icon: "/assets/img/menu/icon_shawarma.png",
        items: [
            { name: "Chicken Shawarma", price: "$7.99", img: "/assets/img/menu/shawarma_chicken.png" },
            { name: "Beef Shawarma", price: "$8.99", img: "/assets/img/menu/shawarma_beef.png" },
            { name: "Falafel", price: "$6.99", img: "/assets/img/menu/falafel.png" },
            { name: "Shawarma Poutine - Chicken", price: "$7.99", img: "/assets/img/menu/shawarma_poutine.png" },
            { name: "Shawarma Poutine - Beef", price: "$8.99", img: "/assets/img/menu/shawarma_poutine.png" },
            { name: "Shawarma Bowl - Chicken", price: "$10.99", img: "/assets/img/menu/shawarmaBowl.png" },
            { name: "Shawarma Bowl - Beef", price: "$11.99", img: "/assets/img/menu/shawarmaBowl.png" }
        ]
    },
    {
        category: "Asian Fusion",
        id: "Fusion",
        icon: "/assets/img/menu/icon_indian.png",
        items: [
            { name: "Chicken Buriyani", content: "Served with Raita", price: "$17.00", img: "/assets/img/menu/briyani.png" },
            { name: "Butter Chicken & Naan/Paratha", content: "1 Naan Bread or Paratha with Butter Chicken", price: "$19.00", img: "/assets/img/menu/butterChickenNaan.png" },
            { name: "Tandoori Chicken & Paratha", content: "1 Paratha with Tandoori Chicken", price: "$20.00", img: "/assets/img/menu/tandooriChickenParata.png" },
            { name: "Butter Chicken", price: "$18.00", img: "/assets/img/menu/butterChickenNaan.png" },
            { name: "Chana Masala", price: "$15.00", img: "/assets/img/menu/channaMasala.png" },
            { name: "Mix vegetables", price: "$15.00", img: "/assets/img/menu/mixedVegetables.png" },
            { name: "2 Tandoori Chicken(Leg)", price: "$10.99", img: "/assets/img/menu/tandooriChickenLegs.png" }
        ]
    },
    {
        category: "Beverages",
        id: "Beverages",
        icon: "/assets/img/menu/icon_drinks.png",
        items: [
            { name: "Cola (Regular + Zero)", price: "", img: "/assets/img/menu/cocacola.png" },
            { name: "Lemon-Lime", price: "", img: "/assets/img/menu/lemonLimeSoda.png" },
            { name: "Root Beer", price: "", img: "/assets/img/menu/rootBeer.png" },
            { name: "Iced Tea", price: "", img: "/assets/img/menu/iceTea.png" },
            { name: "Water", price: "", img: "/assets/img/menu/water.png" },
            { name: "Lemonade", price: "", img: "/assets/img/menu/lemonade.png" },
            { name: "Fruit juice", price: "", img: "/assets/img/menu/fruitJuice.png" },
            { name: "Milk", price: "", img: "/assets/img/menu/milk.png" },
            { name: "Yoghurt", price: "", img: "/assets/img/menu/yogurt.png" },
            { name: "Ice cream", price: "", img: "/assets/img/menu/icecream.png" }
        ]
    }
];

const FoodItem1 = () => {
    const [isActive, setIsActive] = useState('Pizzas');
    return (
        <section className="food-menu-section fix section-padding">
            <div className="burger-shape">
                <Image src="/assets/img/shape/burger-shape.png" alt="img" width={148} height={160} />
            </div>
            <div className="fry-shape">
                <Image src="/assets/img/shape/fry-shape.png" alt="img" width={137} height={158} />
            </div>
            <div className="food-menu-wrapper style1">
                <div className="container">
                    <div className="food-menu-tab-wrapper style-bg">
                        <div className="title-area">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                                FOOD MENU<Image className="ms-1"
                                    src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                Getting You Hungry

                            </h2>
                        </div>

                        <div className="food-menu-tab">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                {menuData.map((tab) => (
                                    <li key={tab.id} className={`nav-item ${isActive === tab.id ? 'active' : ''}`} onClick={() => setIsActive(tab.id)} role="presentation">
                                        <button className="nav-link" id={`pills-${tab.id}-tab`} data-bs-toggle="pill"
                                            data-bs-target={`#pills-${tab.id}`} type="button" role="tab"
                                            aria-controls={`pills-${tab.id}`} aria-selected={isActive === tab.id ? "true" : "false"}>
                                            <Image src={tab.icon} alt="img" width={36} height={36} />
                                            {tab.category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {menuData.map((tab) => (
                                    <div key={tab.id} className={`tab-pane ${isActive === tab.id ? 'active' : ''}`} id={`pills-${tab.id}`} role="tabpanel"
                                        aria-labelledby={`pills-${tab.id}-tab`} tabIndex="0">
                                        <div className="row gx-60">
                                            <div className="col-lg-6">
                                                {tab.items.slice(0, Math.ceil(tab.items.length / 2)).map((item, index) => (
                                                    <FoodItemCard
                                                        key={index}
                                                        img={item.img}
                                                        title={item.name}
                                                        content={item.content || ""}
                                                        price={item.price}
                                                    ></FoodItemCard>
                                                ))}
                                            </div>
                                            <div className="col-lg-6">
                                                {tab.items.slice(Math.ceil(tab.items.length / 2)).map((item, index) => (
                                                    <FoodItemCard
                                                        key={index}
                                                        img={item.img}
                                                        title={item.name}
                                                        content={item.content || ""}
                                                        price={item.price}
                                                    ></FoodItemCard>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
                            <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                            <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                            <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                            <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                            <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                            <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                            <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                            <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                            <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FoodItem1;
