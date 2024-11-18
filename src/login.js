import { login } from "./api.js";
import { hiddenSpinner, visibleSpinner } from "./utils.js";


export async function initLogin(){
    try{
        visibleSpinner()
        const email = document.getElementById('user')
        const password = document.getElementById('password')
        const data = {}
        data.email = email.value
        data.password = password.value
        const  response =  await login(data)
        const accessToken = response.config.auth.access_token;
        const refreshToken = response.config.auth.refresh_token;
        localStorage.setItem("accessToken",accessToken);
        localStorage.setItem("refreshToken",refreshToken);
        window.location.href = "pages/home.html";
        hiddenSpinner()
        return response
    }catch(error){
        //window.location.href = "pages/error_generic.html";
        throw error;
    }
}
