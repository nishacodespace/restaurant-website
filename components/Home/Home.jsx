import Navbar from "../Navbar/Navbar";
import Heading from "../Heading"
import './Home.css'

export default function Home() {
    return(
    <div className="app__home-wrapper">
    <div className="app__home">
        <div className="app__home-container">
        <div className="app__home-text">
            <Heading title={"Welcome to the Royal Feast"}/>
        <p className="app__home-description">
            Welcome to <span style={{color:'white'}}>DAWAAT</span>, where the timeless grandeur of India comes alive through exquisite cuisine.
            Inspired by the lavish traditions of royal kitchens, our dishes are crafted with aromatic spices, perfected recipes, and a dedication to true culinary artistry. Every plate reflects heritage, richness, and the elegance of India’s most celebrated flavors.
            Join us and experience dining that feels refined, warm, and truly unforgettable.
        </p>
         </div>
        <div className="app__home-img">
        <img src="../../assets/homepicture.jpg" alt="spoon"/>
        </div>
    </div>
    </div>
    </div>
    )
}