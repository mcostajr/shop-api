import express from 'express';
import routes from './routes';
require('./database')

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log(`Running Server`))