fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then(res=>(res.json()))
.then(msg=>console.log(msg[0].setup," ",msg[0].punchline))