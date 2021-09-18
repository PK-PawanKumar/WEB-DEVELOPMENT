

document.getElementById("btn").addEventListener("click",makeReq)

// function makeReq(){
//     console.log("button clicked!")
//     config = {
//         method:'get',
//         url:'https://jsonplaceholder.typicode.com/posts/1'
//         // hers /1 will get i data only
//     }

//     axios(config).then((res)=>{
//         var d = res.data;
//         console.log(d)
//         console.log("id = " + d.id)
//         console.log("title = " + d.title)
//         console.log("body = " + d.body)
//     })
// }


// getting multiple data

function makeReq(){
    console.log("button clicked!")
    config = {
        method:'get',
        url:'https://jsonplaceholder.typicode.com/posts'
    }

    axios(config).then((res)=>{
        var d = res.data[10];  // data from id 11
        console.log(d)
        console.log("id = " + d.id)
        console.log("title = " + d.title)
        console.log("body = " + d.body)
    })
}
