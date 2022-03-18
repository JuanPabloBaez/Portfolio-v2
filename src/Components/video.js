import ReactPlayer from 'react-player';


const Video = () => {
    return( 
        <div className="video-body">
           <p>The complete work is available on  <a href="http://beatkino.com/" target="_blank"  rel="noreferrer">beatkino.com</a></p>
        
            
    
                <ReactPlayer 
                className="page-video"
                url="https://vimeo.com/585754763"
                controls={true}
                responsive="true"
                width="100%"
                height="50vh"
                /> 
                
            

        </div>
        
    )
}

export default Video;