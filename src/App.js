import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RawPost from "./Components/rawPost/RawPost";
import {trending,action,Netflix} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={trending} title='Trending'/>
      <RawPost url={action} title='Action' isSmall/>
      <RawPost url={Netflix} title='Netflix Originals' isSmall/>
    </div>
  );
}

export default App;
