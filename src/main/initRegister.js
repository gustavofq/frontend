import {loginController} from '../controller/loginController.js';
import { registerController } from '../controller/registerController.js';
import { Spinner, Notifier} from '../controller/utils.js';


document.addEventListener('DOMContentLoaded',() => {
    const loader = document.getElementById('loader')
    const spinner = new Spinner(loader);
    const notifier = document.getElementById('notification')
    const notifierComponent = new Notifier(notifier)

    const formRegister = document.getElementById('form_register');
    const buttonRegister = document.getElementById('button_register');

    formRegister.addEventListener('submit', (event) =>{
        event.preventDefault(); 
    });

    buttonRegister.addEventListener('click', () => 
        registerController({formRegister, spinner, notifierComponent})
    );

})