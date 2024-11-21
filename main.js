import {loginController} from './src/controller/loginController.js';
import { Spinner, Notifier} from './src/controller/utils.js';


document.addEventListener('DOMContentLoaded',() => {
    const formLogin = document.getElementById('login_form')
    const loader = document.getElementById('loader')
    const spinner = new Spinner(loader);
    const button = document.getElementById('button')
    const notifier = document.getElementById('notification')
    const notifierComponent = new Notifier(notifier)

    formLogin.addEventListener('submit', (event) =>{
        event.preventDefault(); 
    })
    
    button.addEventListener('click', () => 
        loginController({formLogin, spinner, notifierComponent}))
})

