// llamado de librerias
import express from 'express';
import dotenv from 'dotenv';
import { getEnvironment, getNumberEnv, createPathEnv, nodeEnv } from './app/Config/config';
import cors from 'cors';
import morgan  from 'morgan';

getEnvironment();


// instancia en variables
const app = express();
dotenv.config({
    path: createPathEnv(nodeEnv())
});


// settings
app.set('port', getNumberEnv('PORT_APP'));



// middleware
app.use(cors());
app.use(morgan('dev'));




// exportando el modulo
export default app;