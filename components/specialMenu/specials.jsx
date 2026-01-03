import './specialMenu.css';
const Specials=({menuItems})=>{
    return(
        <div className="menu__specials-wrapper">
            {menuItems.map((item,index)=>(
                <div className="special__item" key={index}>
                <img src={item.imgUrl} alt={item.title} className="special__img"/>

                <div className="special__details">
                    <p className="special__title">{item.title}</p>
                    <p className="special__price">{item.price}</p>
                    <p className="special__tags">{item.tags}</p>
                </div>
                </div>
                ))}
        </div>
    );
};
export default Specials;