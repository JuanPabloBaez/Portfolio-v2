import React, {useState, useEffect}  from 'react';
import {client} from './client.js';

import ReactPlayer from 'react-player';
import RichText from '@madebyconnor/rich-text-to-jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './board.css';

SwiperCore.use([Navigation]);

const Board = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
       async function  getPosts () {
        try{
            client.getEntries()
            .then((response)=> {
                setPosts(response.items);
                return
            })
          }catch(error){
            console.log('fatal error')
          }
        }; 
        getPosts();
    },[client])
  
   
     
      
    return( 
        <div className="board-body">
            <h1>Board</h1>
            {
                posts.map((post, index)=> {
                    
                    console.log(post)

                    return(
                        <div className="post-container" key={index}>
                            <div className="post-main">
                                {post.fields.mainPicture && <img src={post.fields.mainPicture.fields.file.url} alt={post.fields.title}/>}
                                <div className="post-main-text">
                                    <RichText className="board-post-title" richText={post.fields.title}/>
                                    <span>
                                        <p>{post.fields.date} </p>
                                        {(function() {
                                            if ( post.fields.place && post.fields.placeLink  ) {
                                                return <a className="post-place" href={post.fields.placeLink} target="_blank" rel="noreferrer">on {post.fields.place} </a>;  
                                            } if (post.fields.place ==="") {
                                                return null
                                            } else {
                                                return <p className="post-place"> {post.fields.place}</p>;
                                            }
                                        })()}
                                    </span>
                                    <RichText className="post-main-content" richText={post.fields.mainContent1}/>
                                </div>
                            </div>

                           {post.fields.videoLink && <ReactPlayer url={post.fields.videoLink} className="board-player" width="100%" />}
                           
                        {post.fields.mainContent2 &&  <RichText className="post-main-content2" richText={post.fields.mainContent2}/>}
                           
                                 {post.fields.media && <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                height="100%"
                                
                                onSlideChange={(swiper) => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation
                                loop={true}
                            >
                            {
                                post.fields.media.map((photo, index )=> {
                                return (
                                <SwiperSlide>
                                    <img className="board-photo" src={photo.fields.file.url} key={index} alt="post related"  />
                                </SwiperSlide>
                                )
                                })      
                            }  
                            </Swiper> } 
                            
                        </div>
                    )
                })/* .reverse() */
            }
        </div>
    )
}

export default Board;