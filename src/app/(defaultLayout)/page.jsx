import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import Offer2 from '../Components/Offer/Offer2';
import About2 from '../Components/About/About2';
import BestSelling2 from '../Components/BestSelling/BestSelling2';
import CtaBanner2 from '../Components/CtaBanner/CtaBanner2';
import FeatureCategory1 from '../Components/FeatureCategory/FeatureCategory1';

export const metadata = {
    title: 'New Italy Pizza | Halal Pizza, Asian Fusion & Bakery in Scarborough',
    description: 'Experience a unique blend of flavors at New Italy Pizza. From authentic Halal stone-baked pizzas to Butter Chicken and Tandoori fusion. Visit us at 1093 Victoria Park Ave!',
    keywords: 'New Italy Pizza Scarborough, Halal Pizza Toronto, Asian Fusion Restaurant Scarborough, Halal Bakery, Tandoori Pizza, Shawarma Victoria Park',
    openGraph: {
        title: 'New Italy Pizza – Asian Fusion & Bakery in Scarborough',
        description: 'Craving Pizza, Shawarma, or Butter Chicken? We serve 100% Halal fusion dishes and fresh bakery treats in the heart of Scarborough.',
    },
};

const page = () => {
    return (
        <div>
            <HeroBanner2></HeroBanner2>
            <Offer2></Offer2>
            <About2></About2>

        </div>
    );
};

export default page;