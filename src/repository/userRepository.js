const headers = {
    'Content-type':'application/json',
    'User-Agent': window.navigator.userAgent
};

export const ErrBadRequest = new Error('bad_request')
export const ErrInternalServerError = new Error('internal_server_error')

export async function login(body){
    try{
        const url='https://sea-lion-app-4gxod.ondigitalocean.app/users/login'

        const response = await fetch(url,{
            method:'POST',
            headers: headers,
            body: JSON.stringify(body)
        })

        if (!response.ok){
            if (response.status === 500){
                throw ErrInternalServerError
            }
            
            if (response.status === 400){
                throw ErrBadRequest
            }
        }

        const data = await response.json();

        return data;
    }catch(error){
        console.error('fetch login', error)
        throw error;
    } 
}