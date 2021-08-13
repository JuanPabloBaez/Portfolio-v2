import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './board.css';

SwiperCore.use([Navigation]);

const Board = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        function  getPosts () {
            axios.get('http://localhost:1337/board-posts')
            .then(response => {
             setPosts(response.data);
             return
           });
        };
        getPosts();
    },[])
  
   
     
      
    return( 
        <div className="board-body">
            <h1>Board</h1>
            {
                posts.map((post, index)=> {
                    


                    return(
                        <div className="post-container" key={index}>
                            <div className="post-main">
                                {post.main_picture && <img src={"http://localhost:1337" + post.main_picture.url} alt={post.title}/>}
                                <div className="post-main-text">
                                    <h2>{post.title}</h2>
                                    <span>
                                        <p>{post.date} </p>
                                        {(function() {
                                            if ( post.place && post.place_link !=="null" ) {
                                                return <a className="post-place" href={post.place_link} target="_blank" rel="noreferrer">on {post.place} </a>;  
                                            } if (post.place ==="") {
                                                return null
                                            } else {
                                                return <p className="post-place"> {post.place}</p>;
                                            }
                                        })()}
                                    </span>
                                    <p className="post-main-content">{post.main_content_1}</p>
                                </div>
                                
                                

                            </div>
                           { post.media[0] && <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={(swiper) => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation
                                loop={true}
                            >
                            {
                                post.media.map((photo, index )=> {
                                return (
                                <SwiperSlide>
                                    <img className="board-photo" src={"http://localhost:1337" + photo.url} key={index} alt={`gallery photo${photo}`}  />
                                </SwiperSlide>
                                )
                                })      
                            }  
                            </Swiper> } 

                            <p className="post-main-content-2">{post.main_content_2}</p>
                            
                            {console.log(post)}
                            
                        </div>
                    )
                }).reverse()
            }
        </div>
    )
}

export default Board;