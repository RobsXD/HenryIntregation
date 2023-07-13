import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cards from "../../components/Cards/Cards"
import Card from "../../components/Card/Card";
import axios from "axios";

function Detail () {

    const {id} = useParams();

    const [pjDetail, setpjDetail] = useState({});

    
    const buscador = () => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({data}) => {
                if(data.name){
                    setpjDetail(data);
                } else {
                    window.alert("No hay personajes con ese ID")
            }
        }
        ).catch(err => window.alert("Error"));
};


    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then ((response) => response.json())
        .then((data) => {
            if (data.name) {
                setpjDetail(data)
            }
            else {
                alert(data.error)
            }
        })
    }, []);

    return(
    <div>
        <h2>{pjDetail.id}</h2>
        <h2>{pjDetail.name}</h2>
        <h2>{pjDetail.status}</h2>
        <h2>{pjDetail.species}</h2>
        <img src={pjDetail.image} alt="" />
        <Link to= "/home">
        <button>Volver al home</button>
        </Link>
    </div>

)}

export default Detail;