import Style from "./Card.module.css"
import { Link } from "react-router-dom";
 
const Card = ({id, name, status, species, gender, origin, image, onClose}) =>  {


   return (
        
      <div>
         <div className={Style.body}>
      <button onClick={() => onClose(id)} className={Style.button}>X</button>
         <h2>{id}</h2>
         
         <h2>{name}</h2>
        
         <h2>{status}</h2>
       
         <h2>{species}</h2>
         
         <h2>{gender}</h2>
         
         <h2>{origin.name}</h2>
         
         <img src={image} alt={name} 
         />
          <Link className={Style.Link} to={`/detail/${id}`}>
         <button className={Style.masInfo}>Mas Info</button>
         </Link>
         </div>
      </div>
      
   );
}

export default Card;