import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {useState, useEffect} from 'react';
import {galleryImages} from "../constants/images";
import './Gallery.css';

export default function Gallery() {
    const images = [
        galleryImages.i1,
        galleryImages.i2,
        galleryImages.i3,
       galleryImages.i4,
        galleryImages.i5,
    ]
    const[index,setIndex]=useState(0);

    const prevImage=()=>{
        setIndex((prevIndex)=>((prevIndex-1+images.length)%images.length));
    };

    const nextImage=()=>{
        setIndex((prevIndex)=>((prevIndex+1)%images.length));
    };

   useEffect(()=>{
       const timer=setInterval(()=>{
           nextImage();
       },3000);

       return()=>clearInterval(timer);
   },[index])

    return(
        <div className="app__gallery">
            <div className="app__gallery-title">
               <h2 className="gallery-heading">
                   Our Visual Vault
               </h2>
                <p className="gallery-subtext">
                    Where Taste Meets Design
                </p>
            </div>
        <div className="app__gallery_imageSlides">
            <div className="gallery__img">
            <button className="gallery__img-leftButton"
                    onClick={prevImage}>
                <FaChevronLeft style={{color:'#cdb587'}}/>
            </button>
            <img src={images[index]}
                alt="ImageSlides"/>
            <button className="gallery__img-rightButton"
                    onClick={nextImage}>
                <FaChevronRight style={{color:'#cdb587'}}/>
            </button>
        </div>
        </div>
        </div>
    )
}
