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
        {posts.map((post, index)=> {
            let{ header,
                mainPicture,
                date,
                place,
                placeLink,
                mainContent1,
                mainContent2,
                videoLink,
                media} = post.fields
               
            return(
                <div className="post-container" key={index}>
                    <h2>{header}</h2>
                    <span>
                        <p className="post-date">{date} </p>
                        {(function() {
                            if ( place && placeLink  ) {
                                return <a className="post-place" href={placeLink} target="_blank" rel="noreferrer">on {place} </a>;  
                            } if (place ==="") {
                                return null
                            } else {
                                return <p className="post-place"> {place}</p>;
                            }
                        })()}
                    </span>
                    <div className="post-main-text">
                        {mainPicture && <img className='main-photo' src={mainPicture.fields.file.url} alt={header}/>}
                        <RichText 
                            richText={mainContent1}
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

                    {media && media.length ===1 ? <img className="board-photo" src={post.fields.media[0].fields.file.url}  alt="post related"  />:null}
                    {media && media.length > 1 ? <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        height="100%"
                        navigation
                        loop={true}
                    >
                    { media.map((photo, index )=> {
                        return (
                            <SwiperSlide key={index}>
                                <img className="board-photo" src={photo.fields.file.url}  alt="post related"  />
                            </SwiperSlide>
                        )
                    })}  
                    </Swiper>
                    :null
                    } 
                    
                    {mainContent2 ?  <RichText 
                        richText={mainContent2}
                        overrides={{
                            [BLOCKS.PARAGRAPH]: {
                            component: "p",
                            props: {
                                className: 'post-main-content2'
                            }
                            }
                        }}
                        /> : null
                    }
                    {videoLink && <ReactPlayer url={videoLink} className="board-player" width="100%" />}
                    <hr></hr>
                </div>
            )
        })}
    </div>
)
}

export default Board;