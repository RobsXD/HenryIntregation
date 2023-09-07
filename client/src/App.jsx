import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Detail from "./Views/Detail/Detail";
import Form from "./components/Formulario/Formulario"
import { useState } from 'react';
import {useEffect} from "react"



const App = () => {
   const navigate = useNavigate();
   const [access, setAccess] = useState (false)
   const EMAIL = "robert@mail.com"
   const PASSWORD = "A123b329"

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

return (
<div className='App'>
   <Routes>

      <Route path='/' element={<Welcome login={login} />} />

      <Route path='/home' element={<Landing />} />

      <Route path='/about' element={<About />} />

      <Route path='/detail/:id' element={<Detail />} />

   </Routes>
 
</div>
 );
}

export default App
