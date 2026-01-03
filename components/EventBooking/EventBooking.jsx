import "./Booking.css";
import Footer from "../Footer/Footer";

const EventBooking = () => {
    return (
        <div>
        <section className="booking">
            <h1 className="booking-title">Private Events</h1>
            <p className="booking-subtext">
                Celebrate your special moments with us
            </p>

            <div className="booking-card">
                <p>
                    We host private dinners, celebrations, and corporate events.
                </p>
                <p>
                    Please contact us to discuss availability and arrangements.
                </p>

                <div className="booking-contact">
                    <span>📞 +1 234 567 890</span>
                    <span>✉️ events@dawaat.com</span>
                </div>

                <form className="booking-form">
                    <input placeholder="Your Name" />
                    <input placeholder="Event Type" />
                    <input type="date" />
                    <button disabled>Request Event</button>
                </form>
            </div>
        </section>
        <Footer/>
    </div>
    );
};

export default EventBooking;
