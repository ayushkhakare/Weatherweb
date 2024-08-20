const apikey="d622f5723e61d7bfabb864b4e084598b"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchname= document.getElementById("input")
const searchbtn= document.getElementById("btn1")

async function cheakwether(city){
    const responce =await fetch(apiurl +city+`&appid=${apikey}`)
    var data=await responce.json()
    console.log(data)

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°c"
    document.querySelector(".humidity").innerHTML =data.main.humidity+"%"
    document.querySelector(".wind").innerHTML =data.wind.speed+"km/h"

}   
searchbtn.addEventListener('click',()=>{
    cheakwether(searchname.value)
})
 