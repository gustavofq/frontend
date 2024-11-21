import { loginService, ErrValidatingUser } from "../service/userService.js";

export async function loginController({formLogin, spinner, notifierComponent}) {
    spinner.setVisible(true);

    const form = new FormData(formLogin);
    const email = form.get("user");
    const password = form.get("password");

    if (!email || !password){
        notifierComponent.setMsg('usuario y contraseña requeridos.');
        spinner.setVisible(false);
        return 
    }

    try {
        const response = await loginService(email, password);
        window.location.href = "pages/home.html";
    } catch (error) {
        if (error === ErrValidatingUser){
            notifierComponent.setMsg("Usuario o contraseñas incorrectos");
            return
        }
        notifierComponent.setMsg("Ah ocurrido un error inesperado.");
    } finally {
        spinner.setVisible(false);
    }
}


