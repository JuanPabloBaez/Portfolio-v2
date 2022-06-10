import React, {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);


const Gallery = ({gallery}) => {
  const [slidePhotos, setSlidePhotos] = useState("collages");
  const [collages,setCollages] = useState([]);
  const [photos, setPhotos] = useState([]);

  function handleGallery () {
    if (slidePhotos==="collages"){
      setSlidePhotos("photos")
      return
    } else {
      setSlidePhotos("collages")
      return
    }
  }

  useEffect(()=>{
    function getGallery () {
      gallery.map( (item)=>{
        if (item.fields.title==="collage"){
          return  setCollages(item.fields.images.map(item=>item.fields.file.url))
        } else if (item.fields.title==="photos"){
          return setPhotos(item.fields.images.map(item=>item.fields.file.url))
        }
      });
    };
    getGallery();
  },[gallery]);


  return(
    <div className="gallery-body" >
      <button onClick={handleGallery} >{slidePhotos==="collages" ? <p><b>Collage</b> / Photography</p>: <p>Collage / <b>Photography</b> </p>}</button>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
      >
      { 
        slidePhotos==="collages" ? collages.map((item,index)=> {
          return (
            <SwiperSlide key={index}>
              <img className="slide-photo" src={item}  alt={`gallery ${item}`} draggable={false}  />
            </SwiperSlide>
            )
        }): null
        }
        {
          slidePhotos==="photos" ? photos.map((item,index)=> {
            return (
              <SwiperSlide key={index}>
                <img className="slide-photo" src={item}  alt={`gallery ${item}`} draggable={false}  />
              </SwiperSlide>
              )
          }): null
        }
      </Swiper>
    </div>
  )
}

export default Gallery;
