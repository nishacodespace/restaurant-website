import "./Footer.css";

const Footer = () => {
    return (
        <footer className="app__footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h4>Restaurant</h4>
                    <p>About Us</p>
                    <p>Our Menu</p>
                    <p>Reservations</p>
                    <p>Private Events</p>
                </div>

                <div className="footer-column">
                    <h4>Customer Care</h4>
                    <p>Contact</p>
                    <p>Opening Hours</p>
                    <p>Location</p>
                    <p>FAQs</p>
                </div>

                <div className="footer-column newsletter">
                    <h4>Newsletter</h4>
                    <p>
                        Be the first to know about special menus, events, and exclusive
                        offers.
                    </p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your email address" />
                        <span>→</span>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Join Us</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>X</p>
                    <p>YouTube</p>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} DAWAAT
            </div>
        </footer>
    );
};

export default Footer;
