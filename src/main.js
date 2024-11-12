const url = "https://sea-lion-app-4gxod.ondigitalocean.app/users/login";
const body = {}
const headers ={
    'Content-Type': 'application/json',
    'User-Agent' :"browser"
}

function  login(){
    body.email = document.getElementById("user_input").value
    body.password = document.getElementById("password_input").value
    fetch(url,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => {
        if(!response.ok){
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            notification.textContent = response;
        }
        return response.json();
    })
    .then(data =>{
        const accessToken = data.config.auth.access_token;
        const refreshToken = data.config.auth.refresh_token;
        localStorage.setItem("accessToken",accessToken);
        localStorage.setItem("refreshToken",refreshToken);
        window.location.href = "public/home.html";
    })
    .catch(error => {
        console.error('hubo un problema con la operación fetch',error);
        document.getElementById("notification").innerText = error
    });
}