import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cards from "../../components/Cards/Cards";

const Landing = () => {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("El personaje esta Repetido");
        }
      })
      .catch(() => window.alert("¡No hay personajes con este ID!"));
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  return (
    <>
      <div>
        <Nav onSearch={onSearch} />
        <Cards characters={characters} onClose={onClose} />
      </div>
    </>
  );
};

export default Landing;
