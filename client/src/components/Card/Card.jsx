import Style from "./Card.module.css"
import { Link } from "react-router-dom";
import { OnButton } from "../Utils/Button/OnButton";
 
const Card = ({id, name, status, species, gender, origin, image, onClose}) =>  {


   return (
        
      <div>
         <div className={Style.body}>
      <OnButton onClick={() => onClose(id)} className={Style.button} text="X" />
         <h2>{id}</h2>
         
         <h2>{name}</h2>
        
         <h2>{status}</h2>
       
         <h2>{species}</h2>
         
         <h2>{gender}</h2>
         
         <h2>{origin.name}</h2>
         
         <img src={image} alt={name} 
         />
         <OnButton onclick={() => onClose(id)} text="X" type="button"/>
         </div>
      </div>
      
   );
}

export default Card;