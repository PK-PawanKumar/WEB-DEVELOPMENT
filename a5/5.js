document.getElementById("btn").addEventListener("click", postData)

function postData() {
    console.log("sumbit data!")
    config = {
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: '{"name": "Pawan","job": "web Developer"}'
    }

    const req = axios(config)
    req.then((Response)=>{
        console.log(Response.data.id)
        console.log(Response.data.name)
        console.log(Response.data.job)
        console.log(Response.data.createdAt)

    })
}