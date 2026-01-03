import {spoon} from "./constants/images.js";
const Heading=({title})=>{
    return(
        <div style={{
            position:'relative',
            display:'inline-block',
            marginBottom:'0rem'
        }}>
            <p style={{
                color:'#cdb587',
                fontSize:'2.5rem',
                padding:'10px',
                marginBottom:'1.5rem',
            }}>{title}</p>
            <img src={spoon} style={{padding:'10px'}} alt="spoon" />
        </div>
    )
}
export default Heading;
