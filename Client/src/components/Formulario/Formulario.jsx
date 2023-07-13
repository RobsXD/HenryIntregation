import react from "react"
import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";


const Form = (props) => {

    const [userData, setUserData] = useState ({
        email: "",
        password: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)
    }

    const [errors, setErrors] = useState({})

    //llamar a setError para que guarde lo que me pasa validation

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        if(property === "email"){
            setErrors(validateEmail({...userData, email:value}))
        }
        if(property === "password"){
            setErrors(validatePassword({...userData, password:value}))
        }

        setUserData({...userData, [property]:value})

        // validate({...userData, [property]: value}, setErrors, errors);
    }

    return(
        <form>
            <div>
                <label htmlFor="">Username:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                <p>{errors.email ? errors.email : null}</p>
            </div>
            <div>
                 <label htmlFor="">Password:</label>
                 <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                 <p>{errors.password && errors.password}</p>
            </div>

            <button type="submit" value="validate" onClick={handleSubmit}>Ingresar</button>       
        </form>
)}
export default Form