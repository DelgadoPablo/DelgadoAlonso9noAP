require('dotenv').config();
const express = require('express')
const cors  =require('cors')

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let cita =[]

app.get('/cita', async(req, res)=>{
    res.status(200).send(cita);
})


app.post('/cita', async (req, res)=>{
    const {body} =  req
    cita.push(body);
    res.status(201).send({
        message:'Datos guardados',
        response: body
    })
})


module.exports= {app, cita}



