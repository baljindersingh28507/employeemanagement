const express = require('express')
const app = express();
const mongoose = require('mongoose')
const userRoutes = require('./src/Routes/user.routes')
const positionRoutes = require('./src/Routes/position.routes')
const cors = require('cors');
const errorHandler = require('./src/middleware/error')

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

app.use('/user', userRoutes)
app.use('/position', positionRoutes)
//Handled error 
app.use(errorHandler)

//Handle 500 error
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json( {
        error: err
    });
})

const db = 'mongodb://localhost:27017/userApp'

mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(()=>console.log("DB connected")).catch((err)=>console.log(err))


const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Running on the port ${PORT}`);
});