document.getElementById("Register").addEventListener("click",register)

function register(){
    console.log("button clicked!")

    config = {
        method:'POST',
        url: 'https://todo-app-csoc.herokuapp.com/auth/register/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: '{"name": "p11111k", "email": "p11111k@gmail.com", "username": "pk11111pk", "password": "pk11111pk"}'
    }

    const request = axios(config)
    request.then((response)=>{
        console.log(response)
    })
}