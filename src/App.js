import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './Components/nav.js';
import Home from './Components/home.js';
import Video from './Components/video.js';
import Web from './Components/web.js';
import Gallery from './Components/gallery.js';
import Board from './Components/board.js';
import './App.css';

function App() {
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
            <Gallery/>
          </Route>
          <Route path="/board">
            <Board/>
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
