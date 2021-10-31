import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=" footer mt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 pt-5 pb-5">
                    <div className="cols">
                        <h3>Contact Us:</h3>
                        <h5>122/2 Rajnogor Area, Habiganj, Bangladesh</h5>
                        <h5>Phone Number: 01711111101</h5>
                        <br />
                        <h3>E-mail Us:</h3>
                        <h5>(1) E-mail: lotif.tourx@gmail.com</h5>
                        <h5>(2) E-mail: lotiftourx.support@gmail.com</h5>
                        <br />
                    </div>
                    <div className="cols">
                        <h3>Our Main Branches:</h3>
                        <h5>MohaKhali DOH, Dhaka</h5>
                        <h5>Dhanmondi, Dhaka</h5>
                        <h5>Gulshan-Badda link-road, Dhaka</h5>
                        <h5>Habiganj Town, Habiganj</h5>
                        <h5>Jalalabad Cantonment, Sylhet</h5>
                        <br />
                    </div>
                    <div className="cols">
                        <h3>Support:</h3>
                        <h5>Contact Us</h5>
                        <h5>About Us</h5>
                        <h5>Destinations</h5>
                        <h5>Our Blogs</h5>
                        <h5>Packages</h5>
                    </div>
                </div>
                <footer className="pb-5">
                    © 2021 Lotif Tourx. All rights reserved
                </footer>
            </div>
        </div>
    );
};

export default Footer;