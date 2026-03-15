import Image from "next/image";

const Contact3 = () => {
    return (
        <div>
            <div className="contact-us-section section-padding fix">
                <div className="contact-box-wrapper style1">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"> <Image src="/assets/img/icon/location.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Our Address</h3>
                                    <p>093 Victoria Park Ave, Scarborough, ON M4B 2K2, Canada</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/gmail.png" alt="img" width={70} height={70} /></div>
                                    <h5 className="title">Mail</h5>
                                    <p>hello@newitalypizza.com</p>
                                    <p>Email us anytime .</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/phone.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Call</h3>
                                    <p>+1 416-757-3758 <br></br>Speak to Support Now</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="contact-box style1">
                                    <div className="contact-icon"><Image src="/assets/img/icon/clock.png" alt="img" width={70} height={70} /></div>
                                    <h3 className="title">Opening Hour</h3>
                                    <p>Every day <br></br> 11.00 am - 11.00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="map-wrapper contact-area-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.101316336715!2d-79.2955154!3d43.7084435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd00684e626b%3A0xb66a5e3b5dd2c8a8!2sNew%20Italy%20Pizza%2C%20Asian%20Fusion%20%26%20Bakery!5e0!3m2!1sen!2slk!4v1773386167880!5m2!1sen!2slk"
                    height="550" loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};
export default Contact3;