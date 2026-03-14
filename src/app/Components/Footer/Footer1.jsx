import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <footer className="footer-section bg-title fix">
            <div className="footer-widgets-wrapper">
                <div className="shape1 float-bob-y d-none d-xxl-block"> <Image src="/assets/img/shape/footerShape1_1.png" alt="img" width={161} height={253} /></div>
                <div className="shape2 d-none d-xxl-block"><Image src="/assets/img/shape/footerShape1_2.png" alt="img" width={492} height={608} /></div>
                <div className="shape3 d-none d-xxl-block"><Image src="/assets/img/shape/footerShape1_3.png" alt="img" width={471} height={742} /></div>
                <div className="shape4  d-none d-xxl-block"><Image src="/assets/img/shape/footerShape1_4.png" alt="img" width={212} height={279} /></div>
                <div className="container">
                    <div className="footer-top">
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <div className="fancy-box">
                                    <div className="item1"><i className="bi bi-geo-alt-fill"></i></div>
                                    <div className="item2">
                                        <h6>address</h6>
                                        <p>093 Victoria Park Ave, Scarborough, ON M4B 2K2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                                <div className="fancy-box">
                                    <div className="item1"><i className="bi bi-envelope-fill"></i></div>
                                    <div className="item2">
                                        <h6>send email</h6>
                                        <p>info@exmple.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                                <div className="fancy-box">
                                    <div className="item1"><i className="bi bi-telephone-fill"></i></div>
                                    <div className="item2">
                                        <h6>call us</h6>
                                        <p>+1 416-757-3758</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow fadeInLeft" data-wow-delay=".3s">
                            © All Copyright 2026 by New Italy Pizza, Developed by<a href="https://www.assistia.ca">Assistia</a>
                        </p>
                        <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <a className="text-white" href="#">
                                    Terms & Condition
                                </a>
                            </li>
                            <li>
                                <a className="text-white" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;