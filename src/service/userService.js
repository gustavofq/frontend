import { ErrBadRequest, login } from "../repository/userRepository.js";

export const ErrValidatingUser = new Error('error_validating_user')

export async function loginService(email, password){
    try{
        const data = {
            email: email,
            password: password
        }

        const  response =  await login(data)
        const accessToken = response.config.auth.access_token;
        const refreshToken = response.config.auth.refresh_token;
        const name = response.model.user.name;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem('user_name', name)
        
        return response
    }catch(error){
        console.error("error service login", error)    
        if (error === ErrBadRequest){
            throw ErrValidatingUser;
        }
        
        throw error
    }
}
