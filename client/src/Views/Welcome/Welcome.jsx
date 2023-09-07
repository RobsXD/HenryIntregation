import WelcomeText from "../../components/WelcomeText";
import { Form, Link } from "react-router-dom";
import style from "./Welcome.module.css"
import Formulario from "../../components/Formulario/Formulario";


const Welcome =(props) => {
    
    return(
    <div className={style.Welcome}>
        <WelcomeText></WelcomeText>

        <Formulario login ={props.login} ></Formulario>

        

    </div>
    )
}

export default Welcome;