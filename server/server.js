import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import router from './Routes/routes.js';
import DefaultData from './default.js';
import cors from 'cors'

const app = express()
dotenv.config();



const port = 4000;

app.use(cors())

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());





app.use('/', router);

//connected to database
const URL = `mongodb+srv://bycottt:oMVrAl0z0pxIDKwp@cluster.7g3gy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
try {
    mongoose.connect(URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    console.log('Database Connected')
} catch (error) {
    console.log('error', error)
}



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// data to database
// app.use(function (req, res, next) {
//     res.header("Access-Control-allow-origin", "*");
//     res.header("Access-control-Allow-Headers", "origin , X-Requested-with,  Content-Type , Accept")
//     next();
// });

DefaultData()

