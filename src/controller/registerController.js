import { registerService, ErrValidatingUser } from "../service/userService.js";

export async function registerController({formRegister, spinner, notifierComponent}) {
    spinner.setVisible(true);

    const form = new FormData(formLogin);
    const name = form.get('name')
    const email = form.get('user');
    const password = form.get('password');

    if (!email || !password || !name){
        notifierComponent.setMsg('todos los campos son obligatorios.');
        spinner.setVisible(false);
        return 
    }

    try {
        const response = await registerService(name, email, password);
        window.location.href = 'pages/register_success.html';
    } catch (error) {
        if (error === ErrValidatingUser){
            notifierComponent.setMsg('Usuario o contraseñas incorrectos');
            return
        }
        notifierComponent.setMsg('Ah ocurrido un error inesperado.');
    } finally {
        spinner.setVisible(false);
    }
}
