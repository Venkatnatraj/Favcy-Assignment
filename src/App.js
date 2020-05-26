import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Image from "./components/Images"

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{color: "brown"}}>Favcy Assignment</h1>
      </header>
      <Link exact to="/image.png" className="App-link">
          Click on to go to Images
        </Link>
        <Route
          path="/image.png"
          exact
          component = {Image}
        />
    </div>
  );
}

export default App;