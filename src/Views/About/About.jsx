import React from "react";
import Style from "./About.module.css"
import { Link } from "react-router-dom";
const About = () => {

return(
<div className={Style.msg}>
    <h1>Pagina diseñada por: El yo
    </h1>
    <h3>Que no quede ninguna duda que fue creada por el Yo, nadie mas</h3>
    <p></p>
    <h3>El Yo</h3>
    <Link to= "/home">
        <button>Volver al menu</button>
    </Link>
    </div>
    );
}

export default About