import BreadCumb from '@/app/Components/Common/BreadCumb';
import FoodItem4 from '@/app/Components/FoodItem/FoodItem4';
import Gallery1 from '@/app/Components/Gallery/Gallery1';
import Timer2 from '@/app/Components/Timer/Timer2';
import React from 'react';

export const metadata = {
  title: 'Our Menu | Pizzas, Shawarma, & Asian Fusion | New Italy Pizza',
  description: 'Explore our diverse menu: 11+ types of Halal Pizza (Small to Party size), Chicken Shawarma, Butter Chicken with Naan, and fresh pastries. Order your favorites today!',
  keywords: 'New Italy Pizza Menu, Halal Pizza Prices, Chicken Shawarma Plate, Butter Chicken Scarborough, Tandoori Chicken Pizza, Halal Party Pizza',
  openGraph: {
    title: 'New Italy Pizza Menu – Halal Pizza & Fusion Favorites',
    description: 'From our signature 4-Meat Pizza to authentic Chicken Biryani with Raita. Check out our full menu and prices.',
  },
};

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/breadcumb.jpg"
        Title="Food Menu"
      ></BreadCumb>
      <FoodItem4></FoodItem4>
    </div>
  );
};

export default page;