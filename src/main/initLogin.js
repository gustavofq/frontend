import {loginController} from '../controller/loginController.js';
import { registerController } from '../controller/registerController.js';
import { Spinner, Notifier} from '../controller/utils.js';


document.addEventListener('DOMContentLoaded',() => {
    const formLogin = document.getElementById('login_form')
    const loader = document.getElementById('loader')
    const spinner = new Spinner(loader);
    const button = document.getElementById('button')
    const notifier = document.getElementById('notification')
    const notifierComponent = new Notifier(notifier)

    formLogin.addEventListener('submit', (event) =>{
        event.preventDefault(); 
    });
    
    button.addEventListener('click', () => 
        loginController({formLogin, spinner, notifierComponent}));
})

