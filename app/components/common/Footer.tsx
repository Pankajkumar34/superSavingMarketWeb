import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 px-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="row text-start text-md-start">
          <div className="col-6 col-md-2 footer-section">
            <h6 className="footer-title">ABOUT</h6>
            <p><a href="#" className="text-white">Contact Us</a></p>
            <p><a href="#" className="text-white">About Us</a></p>
            <p><a href="#" className="text-white">Careers</a></p>
            <p><a href="#" className="text-white">Corporate Information</a></p>
          </div>

          <div className="col-6 col-md-2 footer-section">
            <h6 className="footer-title">HELP</h6>
            <p><a href="#" className="text-white">Payments</a></p>
            <p><a href="#" className="text-white">Shipping</a></p>
            <p><a href="#" className="text-white">Cancellation &amp; Returns</a></p>
            <p><a href="#" className="text-white">FAQ</a></p>
          </div>

          <div className="col-6 col-md-2 footer-section">
            <h6 className="footer-title">POLICIES</h6>
            <p><a href="#" className="text-white">Terms of Use</a></p>
            <p><a href="#" className="text-white">Security</a></p>
            <p><a href="#" className="text-white">Privacy</a></p>
            <p><a href="#" className="text-white">Sitemap</a></p>
          </div>

          <div className="col-6 col-md-3 footer-section">
            <h6 className="footer-title">Mail Us:</h6>
            <p>
              Super Saving Market and Production Pvt. Ltd.<br />
              Building No. 15, Sector-4, Tech Park,<br />
              Lucknow, Uttar Pradesh, India
            </p>
            <p>
              Email: <a href="mailto:support@supersavingmarket.com" className="text-white">support@savingmarket.com</a>
            </p>
            <div className="social-icons mt-2">
              <p>Social</p>
              <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white me-2"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="footer-title">Registered Office Address:</h6>
            <p>
              Super Saving Market and Production Pvt. Ltd.<br />
              Tech Village Road, Vibhuti Khand,<br />
              Lucknow, Uttar Pradesh, India<br />
              CIN: U12345UP2025PTC000001<br />
              Telephone: +91-9000000000
            </p>
          </div>
        </div>

        <div className="row mt-4 bottom-bar align-items-center">
          <div className="col-md-3 col-12 text-center text-md-start mb-2 mb-md-0">
            <a href="#" className="me-3 text-white"><i className="bi bi-shop"></i> Become a Seller</a>
          </div>
          <div className="col-md-3 col-12 text-center mb-2 mb-md-0">
            <a href="#" className="me-3 text-white"><i className="bi bi-bullseye"></i> Advertise</a>
          </div>
          <div className="col-md-3 col-12 text-center mb-2 mb-md-0">
            <a href="#" className="me-3 text-white"><i className="bi bi-gift"></i> Gift Cards</a>
          </div>
          <div className="col-md-3 col-12 text-center mb-2 mb-md-0">
            <a href="#" className="text-white"><i className="bi bi-question-circle"></i> Help Center</a>
          </div>
        </div>

        <div className="text-center text-secondary mt-3">
          ©2025 Super Saving Market and Production Pvt. Ltd. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
