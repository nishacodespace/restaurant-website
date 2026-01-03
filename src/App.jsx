import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import SpecialMenu from "../components/specialMenu/specialMenu";
import Menu from "../components/Menu/Menu";
import About from "../components/About/About";
import {Routes, Route} from "react-router-dom";
import Chef from "../components/Chef/Chef";
import Gallery from "../components/Gallery/Gallery";
import EventBooking from "../components/EventBooking/EventBooking";
import Footer from "../components/Footer/Footer";
import BookTable from "../components/EventBooking/BookTable";

export default function App() {
    return (
    <div >
       <Navbar/>
        <Routes>
            <Route path="/" element={
                <>
                    <Home/>
                    <SpecialMenu/>
                     <Chef/>
                      <Gallery/>
                    <About/>
                    <Footer/>
                </>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/BookTable" element={<BookTable/>}/>
            <Route path="/EventBooking" element={<EventBooking/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Chef" element={<Chef/>}/>
        </Routes>
    </div>
)}
