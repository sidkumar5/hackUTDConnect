/* istanbul ignore file */
import express from 'express';
import cors from 'cors';
import { env } from './env';
import { logger } from './logger';
import { flights } from './api/flights';
import { airportRouter } from './api/airports';
import fetch from "node-fetch";
import { json } from 'stream/consumers';

const port = env.port || '4000';

const app = express();


app.use(cors());
app.use(express.json());
app.get('/flights?date=2020-01-01', (req, res) => {  
  
});




app.use('/flights', flights);

app.use('/airports', airportRouter);


app.listen(port, () => {
  logger.notice(`🚀 Listening at http://localhost:${port}`);
});
