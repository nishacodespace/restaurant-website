import Heading from "../Heading";
import './specialMenu.css';
import {specialMenu} from '../constants/restaurantdata';
import Specials from "./specials";
import {useNavigate} from 'react-router-dom';

export default function SpecialMenu() {
    const navigate = useNavigate();
    return(
        <div className="app__specialMenu">
      <div className="app__menu-wrapper">
          <p className="menu-subtext" style={{
              fontSize:'16px',
              color:'white',
              fontStyle:'italic',
              padding:'0'}}>Food to satisfy your pallete</p>
          <div className="app__menu-title">
          <Heading title={"Today's Special"}> </Heading>
          </div>
          <div className="app__menu-content">
              <div className="app__menu-specials">
                  <Specials menuItems={specialMenu}/>
              </div>
          </div>
      </div>
            <button className="app__exploreMenu" onClick={()=>navigate('/menu')}>Explore More</button>
        </div>
    )
}