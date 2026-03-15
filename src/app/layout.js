import { Epilogue, Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import SmokeEffect from "./Components/SmokeEffect";

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'New Italy Pizza | Halal Pizza, Asian Fusion & Bakery in Scarborough',
    template: '%s | New Italy Pizza',
  },
  description: 'Experience a unique blend of flavors at New Italy Pizza. From authentic Halal stone-baked pizzas to Butter Chicken and Tandoori fusion. Visit us at 1093 Victoria Park Ave!',
  openGraph: {
    title: 'New Italy Pizza – Asian Fusion & Bakery in Scarborough',
    description: 'Craving Pizza, Shawarma, or Butter Chicken? We serve 100% Halal fusion dishes and fresh bakery treats in the heart of Scarborough.',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
      </head>
      <body className={`${epilogue.variable} ${roboto.variable}`}>
        <SmokeEffect />
        {children}
      </body>
    </html>
  );
}
