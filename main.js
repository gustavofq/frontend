import {loginController} from './src/controller/loginController.js';
import { registerController } from './src/controller/registerController.js';
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
    });
    
    button.addEventListener('click', () => 
        loginController({formLogin, spinner, notifierComponent}));


    const formRegister = document.getElementById('form_register');
    const buttonRegister = document.getElementById('button_register');

    formRegister.addEventListener('submit', (event) =>{
        event.preventDefault(); 
    });

    buttonRegister.addEventListener('click', () => 
        registerController({formRegister, spinner, notifierComponent})
    );

})

