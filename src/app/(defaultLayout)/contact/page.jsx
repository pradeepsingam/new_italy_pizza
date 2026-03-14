import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact3 from '@/app/Components/Contact/Contact3';
import React from 'react';

export const metadata = {
  title: 'Contact Us | New Italy Pizza Scarborough | Order Now: +1 416-757-3758',
  description: 'Located at 1093 Victoria Park Ave, Scarborough. Call us at +1 416-757-3758 for pickup or delivery. Open for all your Halal pizza and bakery cravings.',
  keywords: 'New Italy Pizza Address, New Italy Pizza Phone Number, Pizza Delivery Scarborough, 1093 Victoria Park Ave Restaurant',
  openGraph: {
    title: 'Get in Touch with New Italy Pizza',
    description: 'Find us in Scarborough at Victoria Park & St. Clair. Call now to place your Halal pizza or catering order.',
  },
};

const page = () => {
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Contact Us"
            ></BreadCumb> 
            <Contact3></Contact3>      
    </div>
  );
};

export default page;