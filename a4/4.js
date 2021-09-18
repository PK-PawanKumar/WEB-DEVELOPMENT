document.getElementById("btn").addEventListener("click", getreq)

// // output on console.log
// function getreq() {
//     console.log("button clicked!")
//     config = {
//         method: 'get',
//         url: 'https://jsonplaceholder.typicode.com/posts'
//     }

//     axios(config).then((res) => {
//         for (var i = 0; i < 100; i++) {
//             var d = res.data[i];
//             console.log(d)
//             console.log("id = " + d.id)
//             console.log("title = " + d.title)
//             console.log("body = " + d.body)
//         }
//     })
// }

// output on window
function getreq() {
    console.log("button clicked!")
    config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }

    axios(config).then((res) => {
        for (var i = 0; i < 100; i++) {
            var d = res.data[i];
            document.getElementById("txt_file_data").innerHTML += 
            `<div> ${d.id} </div>
            <div> ${d.title} </div>
            <div> ${d.body} </div><hr>`
            document.getElementById("txt_file_data").style.color="red"
        }
    })
}