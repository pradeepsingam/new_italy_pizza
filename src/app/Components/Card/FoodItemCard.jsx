import Image from "next/image";
import Link from "next/link";

const FoodItemCard = ({img,title,content,price}) => {
    return (
        <div className="single-menu-items">
        <div className="details">
            <Link href="https://www.restaurantlogin.com/api/fb/_z9_d_x_y" target="_blank">
                <div className="menu-item-thumb"><Image src={img} alt="img" width={80} height={80}   /></div>
            </Link>
            <div className="menu-content">
                <Link href="https://www.restaurantlogin.com/api/fb/_z9_d_x_y" target="_blank">
                    <h3>{title}</h3>
                </Link>
                <p>{content}</p>
            </div>
        </div>
        <h6>{price}</h6>
    </div>
    );
};

export default FoodItemCard;