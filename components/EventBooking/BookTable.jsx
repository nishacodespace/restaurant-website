import "./Booking.css";
import Footer from "../Footer/Footer";

const BookTable = () => {
    return (
        <div>
        <section className="booking">
            <h1 className="booking-title">Reserve a Table</h1>
            <p className="booking-subtext">
                We look forward to welcoming you
            </p>

            <div className="booking-card">
                <p>
                    Online reservations will be available soon.
                </p>
                <p>
                    For now, please reserve your table by calling or messaging us.
                </p>

                <div className="booking-contact">
                    <span>📞 +1 234 567 890</span>
                    <span>✉️ reservations@dawaat.com</span>
                </div>

                <form className="booking-form">
                    <input placeholder="Your Name" />
                    <input type="date" />
                    <input placeholder="Number of Guests" />
                    <button disabled>Reserve Table</button>
                </form>
            </div>
        </section>
            <Footer />
        </div>
    );
};

export default BookTable;
