const baseUrl = 'https://sea-lion-app-4gxod.ondigitalocean.app';
const headers = {
    'Content-type':'application/json',
    'User-Agent': window.navigator.userAgent
};

export async function login(body){
    try{
        console.log("inicio login")
        const url='https://sea-lion-app-4gxod.ondigitalocean.app/users/login'
        const response = await fetch(url,{
            method:'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
    
        if (!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }catch(error){
        console.error("error al hacer login.");
        throw error;
    } 
}