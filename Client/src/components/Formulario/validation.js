

export const validateEmail = (email) => {
    const emailValid = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    console.log(email);
    if (!emailValid.test(email.email)) return "No es un email valido"
    if (email.email == "")             return "El campo esta vacio"
    if (email.email.length > 35)       return "El nombre de usuario no debe ser mayor a 35 caracteres"
    else                               return "El usuario esta correcto"
}

export const validatePassword = (password) => {
    const passwordValid = /^(?=.*\d).{6,10}$/;
    console.log(password);
    if (!passwordValid.test(password.password)) return "Contraseña invalida"
    if (password.password.length < 5 || password.password.length > 11) return "la contraseña tiene que tener una longitud entre 6 y 10 caracteres."
    else return "Contraseña correcta"
}

 