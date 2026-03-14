"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const About2 = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);

    const handelClick = () => {
        setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
        setToggle(!toggle);
    };
    const handelClose = () => {
        setIframeSrc('about:blank');
        setToggle(!toggle);
    };

    return (
        <section className="about-us-section fix section-padding pt-0">
            <div className="about-wrapper style2">
                <div className="shape1 d-none d-xxl-block"><Image src="/assets/img/shape/aboutShape2_1.png" alt="img" width={225} height={401} /></div>
                <div className="container">
                    <div className="about-us section-padding">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                                <div className="about-thumb mb-5 mb-lg-0">
                                    <Image src="/assets/img/shape/about_shape_2026.png" alt="img" width={875} height={536} />


                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="title-area">
                                    <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                        <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                                        About US<Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20} />
                                    </div>
                                    <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                        A Bold Fusion of Global Flavors
                                    </h2>
                                    <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">
                                        At New Italy Pizza, we don’t just serve food; we bridge cultures. Located in the heart of Scarborough, we specialize in a unique culinary harmony where traditional Italian stone-baked techniques meet the bold, aromatic spices of Asian and Indian fusion. Whether you are craving a classic 4-Cheese Pizza or our signature Tandoori Chicken Pizza, every dish is a celebration of flavor.
                                    </div>
                                </div>
                                <div className="fancy-box-wrapper">
                                    <div className="fancy-box">
                                        <div className="item"><Image src="/assets/img/icon/aboutIcon1_1.svg" alt="img" width={36} height={36} /></div>
                                        <div className="item">
                                            <h6>super quality food</h6>
                                            <p>We prioritize your dietary needs without compromising on flavor. Our menu is 100% Halal, featuring premium beef pepperoni, succulent grilled chicken, and fresh vegetables prepared daily. Taste the difference that quality makes.</p>
                                        </div>
                                    </div>
                                    <div className="fancy-box">
                                        <div className="item"><Image src="/assets/img/icon/aboutIcon1_2.svg" alt="img" width={36} height={36} /></div>
                                        <div className="item">
                                            <h6>Qualified Chef</h6>
                                            <p>Our experienced chefs don’t just cook; they craft. By combining years of experience in both Western and Eastern cuisines, they ensure every plate is balanced, savory, and served with the warmth of a family-run kitchen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item style1">
                            <span className="text-slider"></span><span className="text-slider text-style">Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Naan</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Shawarma</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Biryani</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Wings</span>
                            <span className="text-slider"></span><span className="text-slider text-style">French Fries</span>
                            <span className="text-slider"></span><span className="text-slider text-style"> Wedge</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Pizza</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Naan</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Shawarma</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Biryani</span>
                            <span className="text-slider"></span><span className="text-slider text-style">Wings</span>
                            <span className="text-slider"></span><span className="text-slider text-style">French Fries</span>
                            <span className="text-slider"></span><span className="text-slider text-style"> Wedge</span>
                        </li>
                    </ul>
                </div>
            </div>
            <VideoModal
                isTrue={toggle}
                iframeSrc={iframeSrc}
                handelClose={handelClose}
            ></VideoModal>

        </section>
    );
};

export default About2;