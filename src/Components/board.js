import React from 'react';
import ReactPlayer from 'react-player';
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';


SwiperCore.use([Navigation]);

const Board = ({posts}) => {
    
      
    return( 
        <div className="board-body">
            <h1>Board</h1>
            {
                posts.map((post, index)=> {

                    return(
                        <div className="post-container" key={index}>
                            <div className="post-main">
                                {post.fields.mainPicture && <img src={post.fields.mainPicture.fields.file.url} alt={post.fields.title}/>}
                                <div className="post-main-text">
                                    <RichText
                                        richText={post.fields.title}
                                        overrides={{
                                            [BLOCKS.PARAGRAPH]: {
                                              component: "h2",
                                              props: {
                                                className: 'board-post-title'
                                              }
                                            }
                                          }}
                                     />
                                    <span>
                                        <p className="post-date">{post.fields.date} </p>
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
                                    <RichText 
                                        richText={post.fields.mainContent1}
                                        overrides={{
                                            [BLOCKS.PARAGRAPH]: {
                                              component: "p",
                                              props: {
                                                className: 'post-main-content'
                                              }
                                            }
                                          }}
                                    />
                                </div>
                            </div>
                            

                            {post.fields.media > 1 ? <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                height="100%"
                                navigation
                                loop={true}
                            >
                            {
                                post.fields.media.map((photo, index )=> {
                                return (
                                <SwiperSlide key={index}>
                                    <img className="board-photo" src={photo.fields.file.url}  alt="post related"  />
                                </SwiperSlide>
                                )
                                })      
                            }  
                            </Swiper>:
                            post.fields.media ? 
                            <img className="board-photo" src={post.fields.media[0].fields.file.url}  alt="post related"  />:
                            null
} 
                           
                            {post.fields.mainContent2 ?  <RichText 
                                                            richText={post.fields.mainContent2}
                                                            overrides={{
                                                                [BLOCKS.PARAGRAPH]: {
                                                                component: "p",
                                                                props: {
                                                                    className: 'post-main-content2'
                                                                }
                                                                }
                                                            }}
                                                          /> : null}
                            {post.fields.videoLink && <ReactPlayer url={post.fields.videoLink} className="board-player" width="100%" />}
                            

                            <hr></hr>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board;