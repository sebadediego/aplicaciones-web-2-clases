import express from  'express'

const PUERTO = 3000

const app = express()

app.get('/', (req, res) =>{

    //res.end('Hola expressnp')
    //res.send('Hola con send')
    res.send({mensaje:'Hola'})

})



app.listen(PUERTO, ()=>{
    console.log (`Servidor express corriendo en el puerto ${PUERTO}`)
})