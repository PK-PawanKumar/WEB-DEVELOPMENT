document.getElementById("btn").addEventListener("click", postData)

function postData(e) {
    e.preventDefault();

    var name = document.getElementById("name").value
    var job = document.getElementById("job").value    
    console.log("form submmited")
    config = {
        method:'POST',
        url: 'https://reqres.in/api/users',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({ name: name, job: job })
    }

    const req = axios(config)
    req.then((response)=>{
        console.log(response.data)
    })
}
