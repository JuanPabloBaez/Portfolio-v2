import React, {useState, useEffect}  from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {client} from './client.js';
import Nav from './Components/nav.js';
import Home from './Components/home.js';
import Video from './Components/video.js';
import Web from './Components/web.js';
import Gallery from './Components/gallery.js';
import Board from './Components/board.js';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [gallery, setGallery] = useState([]);
    
  useEffect(()=>{
      async function  getPosts () {
      try{
          client.getEntries()
          .then((response)=> {
              setPosts(response.items.filter(item=> item.sys.contentType.sys.id==="post"));
              setGallery(response.items.filter(item=> item.sys.contentType.sys.id==="gallery"));
              return
          })
        }catch(error){
          console.log('fatal error')
        }
      }; 
      getPosts();
  },[])


  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/video">
            <Video/>
          </Route>
          <Route path="/web">
            <Web/>
          </Route>
          <Route path="/image">
            <Gallery gallery={gallery}/>
          </Route>
          <Route path="/board">
            <Board posts={posts}/>
          </Route>
        </Switch>
        <footer>
        <p>&copy; Juan Pablo Baez {new Date().getFullYear()}</p>      
      </footer>
      </Router>
    </div>
  );
}

export default App;
