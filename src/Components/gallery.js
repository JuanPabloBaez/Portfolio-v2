import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import './gallery.css';

SwiperCore.use([Navigation]);

function importAll(r) {
  return r.keys().map(r);
}
const collages = importAll(require.context('../images/collage', false, /,*\.jpg$/));
const photos = importAll(require.context('../images/photos', false, /,*\.jpeg$/));


const Gallery = () => {
    const [slidePhotos, setSlidePhotos] = useState(collages);

    function handleGallery () {
      if (slidePhotos===collages){
        setSlidePhotos(photos)
        return
      } else {
        setSlidePhotos(collages)
        return
      }
    }
   

    return( 
        <div className="gallery-body" >
          <button onClick={handleGallery} >{slidePhotos===collages ? "to Photography": "to Collages"}</button>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            loop={true}
          >
          {
            slidePhotos && slidePhotos.map((photo, index )=> {
              return (
              <SwiperSlide>
                <img className="slide-photo" src={photo.default} key={index} alt={`gallery photo${photo}`}  />
              </SwiperSlide>
              )
            })      
          }  
          </Swiper>
        </div>
    )
}

export default Gallery;