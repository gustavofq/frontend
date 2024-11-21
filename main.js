import {loginController} from './src/controller/loginController.js';
import { Spinner } from './src/controller/utils.js';


document.addEventListener('DOMContentLoaded',() => {
    const formLogin = document.getElementById('login_form')
    const loader = document.getElementById('loader')
    const spinner = new Spinner(loader);
    const button = document.getElementById('button')
    const notification = document.getElementById('notification')

    formLogin.addEventListener('submit', (event) =>{
        event.preventDefault(); 
    })
    
    button.addEventListener('click', () => loginController({formLogin, spinner, button, notification}))
    
})

