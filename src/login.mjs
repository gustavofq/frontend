import { login } from "./api.mjs";

export function initLogin(){
    try{
        console.log("ingreso al init login")
        const email = document.getElementById('user_input')
        const password = document.getElementById('password_input')
        const data = {}
        data.email = email.value
        data.password = password.value
        response = login(data)
        console.log(response)
    }catch(error){
        window.location.href = "pages/error_generic.html";
    }
}
