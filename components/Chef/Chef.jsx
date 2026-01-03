import './Chef.css';
import { LuChefHat } from "react-icons/lu";
export default function Chef() {
    return (
        <div className="app__chef">
            <div className="app__chef-title">
                <LuChefHat className="app__chef-hat" size={24}/>
                <h1>Welcome our Chef</h1>
                <LuChefHat className="app__chef-hat" size={24}/>
            </div>
                <p className="app__chef-subtitle">The visionary behind our signature culinary elegance </p>
        <div className="app__chef-about">
            <div className="app__chef-imgContainer">
                <img className="app__chef-img" src="/assets/chef.jpg" alt="Chef" />
            </div>
                <div className="app__chef-img-text">
                   <p> <span style={{color:'white'}}>Chef Vikas</span> is the heart of our kitchen, bringing with him a deep love for India’s royal culinary traditions.
                       Inspired by the grand feasts once prepared in the palaces of Rajasthan, Awadh, and Hyderabad, he has dedicated his life to preserving those timeless flavors while presenting them with modern finesse.
                        His journey began in a family where food was more than nourishment—it was a celebration.
                        From an early age, he learned the delicate art of balancing spices, understanding aromas, and respecting slow-cooking techniques that are the soul of Indian royal cuisine.
                        Over the years, he refined these skills under master chefs known for their impeccable heritage recipes, giving him a mastery that beautifully blends authenticity with elegance.
                   </p>
                </div>
        </div>
        </div>
    )
}