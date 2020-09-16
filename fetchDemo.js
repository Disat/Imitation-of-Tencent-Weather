// async function fetchData(){
//     let response = await fetch('');
//     let result =  response.json();
//     let status =  response.status;
//     let wrap = {
//         result:result,
//         status:status,
//     }
//     return wrap;
// }
// let a = 1;
// let data = fetchData().then(wrap=>console.log(wrap))
// console.log(data);


let host   = "http://iweather.market.alicloudapi.com/address?"
let querys = 'city=石家庄&needday=7&prov=河北&area=裕华'
let url    = host + querys
    enUrl  = encodeURI(url)






async function fetchData(enUrl){
    let weatherData = await fetch(enUrl,{
        headers:{
            "Authorization": "APPCODE 84f138cced404c9b9256daebdf47f644",
        }
    })

    return weatherData.json()
}

let weather = fetchData(enUrl)

data = weather.then(result=>{

    console.log(JSON.stringify(result))
})

