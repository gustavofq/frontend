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
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error => {
        console.error('hubo un problema con la operación fetch',error);
    });
}