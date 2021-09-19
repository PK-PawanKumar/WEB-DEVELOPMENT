document.getElementById("Register_Btn").addEventListener("click",Register)

function Register(e){
    e.preventDefault();

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log("button clicked!")
    console.log("name = "+name)
    console.log("email = "+email)
    console.log("username = "+username)
    console.log("password = "+password)


    config = {
        method:'POST',
        url: 'https://todo-app-csoc.herokuapp.com/auth/register/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name: name, email: email, username: username, password: password})
        // data:'{"name": "Pawaaqwwn","email": "web@gmaial.com", "username":"pqasak", "password":"plaalpalpl"}'
    }

    const request = axios(config)
    request.then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })
}

