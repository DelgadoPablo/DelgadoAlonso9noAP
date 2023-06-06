
const {app} = require('./controllers/cita');




const server = app.listen(process.env.PUERTO, ()=>{
  console.log("API REST - FUNCIONANDO");
})

module.exports= server