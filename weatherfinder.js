let city=document.getElementById('cities')
console.log(city)
let weatherUrl='https://api.weatherapi.com/v1/current.json?key=271356                                                                                                                                                                                                                                                                                                                                                                                                                     ed85524972af7112416242305&q=india&aqi=yes'
fetch(weatherUrl)
.then(res=>((res.json())))
.then(msg=>(document.getElementById('res').innerHTML=msg.location.country,
document.getElementById('city').innerHTML=msg.location.name,
document.getElementById('temp').innerHTML=msg.current.temp_c,
document.getElementById('climate').innerHTML=msg.current.condition.text,
document.getElementById('img').innerHTML=msg.current.condition.icon
))
.catch(res=>(console.log("there is a problem",res)))