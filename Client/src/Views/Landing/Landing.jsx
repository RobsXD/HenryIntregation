import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import Cards from '../../components/Cards/Cards';

const Landing =() => {

    const [characters, setCharacters] = useState ([])

    function onSearch(id) {
        axios(`https://localhost:3001/rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (!characters.find(char => char.id === data.id)) 
           { if (data.name) {
              
              setCharacters((oldChars) => [...oldChars, data]);
           }} else {
              window.alert('El personaje esta Repetido');
           }
        }).catch(() => window.alert("¡No hay personajes con este ID!"));
     }

     function onClose(id) {
        setCharacters(characters.filter(char => char.id !== id))
     }

    return(
        <>
    <div>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
        {/* <iframe id="Doom 1" src="/emupedia-game-doom1/" onload="this.focus();this.contentWindow.focus();" frameborder="0" allowtransparency="true" allow="autoplay; fullscreen; accelerometer; gyroscope; geolocation; microphone; camera; midi; encrypted-media; clipboard-read; clipboard-write" sandbox="allow-forms allow-downloads allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"></iframe> */}
    </div> 
        </>
    )
}

export default Landing;