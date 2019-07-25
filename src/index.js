import app from './app'
import mongoose from'mongoose'

const port = process.env.PORT || 8000

mongoose.connect('mongodb://admin:Fullstack2019.@ds141657.mlab.com:41657/fullstack', {useNewUrlParser: true}, (err,res)=>{
if(err) throw err
else {
    console.log('Conexion con Mongo Ok!');
    app.listen(port,()=>{
        console.log('Server express Ok!, test application in: \nhttp://localhost:'+port);
    })
}
});