//importamos as configurações do servidor 

const{app,port} = require('../server')

const index = require('./routes/app')

//escuta o servidor 
app.listen(port, () =>{
    console.log('servidor escuntando em  http://localhost:${port}') 
})