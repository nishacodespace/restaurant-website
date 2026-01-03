import Heading from "../Heading";
import './Menu.css';
import {useState} from 'react';
import {starters,mainCourse,drinks,desserts} from "../constants/restaurantdata"
import Specials from "../specialMenu/specials";
import Footer from "../Footer/Footer";

export default function Menu({menuItems}) {
    const[activeTab, setActiveTab] = useState('starters');

    const tabMap={
        starters,"main course":mainCourse,
        drinks,
        desserts
    };

    const filteredMenuItems=tabMap[activeTab];

    return (
        <div className="app__menu">
        <div className="menu__wrapper">
            <p className="app__menu-title">-----Welcome to the Food Paradise-----</p>
        </div>
            <nav className="menu__nav">
                {["starters","main course","drinks","desserts"].map(tab=>(
                    <button key={tab}
                            className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={()=>setActiveTab(tab)}>
                        {tab.charAt(0).toUpperCase()+tab.slice(1)}
                    </button>
                ))}
            </nav>
            <div className="menu__items">
                {filteredMenuItems.map((item,index)=>(
                    <Specials menuItems={[item]}/>
                    ))}
            </div>
            <Footer/>
        </div>
    )
}