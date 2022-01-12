import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


const app = express();
DotEnv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
}


const PORT = process.env.PORT || 8000;



Connection(process.env.MONGODB_URI || URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));