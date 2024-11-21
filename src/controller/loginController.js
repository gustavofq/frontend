import { loginService } from "../service/userService.js";


export async function loginController({formLogin, spinner, button, notification}) {
    spinner.setVisible(true);

    const form = new FormData(formLogin);
    const email = form.get("user");
    const password = form.get("password");

    if (!email || !password){
        notification.textContent = 'usuario y contraseña requeridos.';
        notification.style.display= 'block';
        spinner.setVisible(false);
        return 
    }

    try {
        const response = await loginService(email, password);
        window.location.href = "pages/home.html";
    } catch (error) {
        if (error === ErrValidatingUser){
            notification.textContent = 'Usuario o contraseñas incorrectos';
            notification.style.display = 'block'
            return
        }
        notification.textContent = 'Ah ocurrido un error inesperado.';
        notification.style.display = 'block';  
    } finally {
        spinner.setVisible(false);
    }
}
