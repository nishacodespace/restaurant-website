import './About.css';
import Footer from "../Footer/Footer";
import {aboutImages} from "../constants/images.js";

export default function About () {
    return(
           <div className="app__aboutus">
               <div className="app__aboutus-heading">
                   <h2 className="aboutus-title">About us</h2>
                   <p className="aboutus-subtext">Our Story</p>
               </div>
           <div className="app__aboutus-description">
               <div className="aboutus-description">
                   <p className="aboutus-description-text">
                       At <span style={{color:'white'}}>DAWAAT</span>, we celebrate the richness of Indian cuisine through refined flavors, premium ingredients, and timeless culinary traditions. Our chefs craft each dish with care, blending authentic regional recipes with elegant modern presentation.
                       Step into an atmosphere of contemporary luxury, warm hospitality, and handcrafted décor inspired by India’s royal heritage. Whether you join us for an intimate dinner or a special celebration, we strive to create an unforgettable dining experience where every detail reflects the essence of true Indian luxury.
                   </p>
               </div>
               <div className="app__aboutus-images">
                   <img className="image1" alt="img" src={aboutImages.image1}/>
                   <img className="image2" alt="img" src={aboutImages.image2}/>
                   <img className="image3" alt="img" src={aboutImages.image3}/>
               </div>
           </div>
       </div>
    )
}
