const baseUrl = 'https://sea-lion-app-4gxod.ondigitalocean.app';
const headers = {
    'Content-type':'application/json',
    'User-Agent': window.navigator.userAgent
};

export async function login(body){
    try{
        url='${baseUrl}/user/login'
        response = await fetch(url,{
            method:'POST',
            headers: headers,
            body: JSON.stringify(body)
        })
    
        if (!response.ok){
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        data = await response.json();

        return data;
    }catch(error){
        console.error("error al hacer login.");
        throw error;
    } 
}