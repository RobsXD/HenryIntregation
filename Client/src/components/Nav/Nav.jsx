import React from "react"; //Hay mas cosas acá adentro
import SearchBar from "../SearchBar/SearchBar";
import { Link, Route, Router } from "react-router-dom";
import Style from "./Nav.module.css"


const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch}/>    
    </nav>
  );
};

export default Nav;