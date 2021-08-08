import videoHome from '../images/title_2.mp4'

const Home = () => {
    return(
        <> 
        <p>home</p>
        <video id="background-video" loop autoPlay muted >
              <source src={videoHome} type="video/mp4" />    
        </video>
        </>
    )
}

export default Home;