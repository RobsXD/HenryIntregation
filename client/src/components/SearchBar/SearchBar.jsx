import style from "./SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Portal} from "../../assets/img/Index";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }
  return (
    <div>
      <nav className={style.header}>
        <img
          className={style.logo}
          src={MyImg}
          alt="Foto logo de rick and morty"
        />

        <div className={style.search}>
          <input
            className={style.searchBar}
            onChange={handleChange}
            type="search"
          />

          <button className={style.buttonSearch} onClick={() => onSearch(id)}>
            Buscar
          </button>
        </div>

        <div>
          <Link to="/about">
            <button className={style.About}>About</button>
          </Link>
          <span className={style.span}></span>
          <Link to="/">
            <button className={style.logOut}>Log Out</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
