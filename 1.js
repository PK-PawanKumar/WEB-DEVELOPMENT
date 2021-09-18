// const { default: axios } = require("axios");

document.getElementById("btn").addEventListener("click", make_req);

function make_req() {
    console.log("button clicked!")
    // config = {
    //     method: 'get',
    //     url: 'text.txt'
    // }
    // const promeiseobj = axios(config)
    // promeiseobj.then((res) => {
    //     console.log(res)
    //     console.log(res.data)
    // })

    //// getting error
    // config = {
    //     method:'get',
    //     url:'temxt.txt'
    // }
    // const promeiseobj = axios(config)
    // promeiseobj.then((res)=>{
    //     console.log(res)
    //     console.log(res.data)
    //     document.getElementById("txt_file_data").innerText=res.data
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // showing data in browser

    config = {
        method: 'get',
        url: 'text.txt'
    }
    const promeiseobj = axios(config)
    promeiseobj.then((res) => {
        console.log(res)
        console.log(res.data)
        document.getElementById("txt_file_data").innerText = res.data
    })

}
