import express, { Express, Request, Response } from 'express';
import router from "./routes";
import bodyParser from "body-parser";
import cors from 'cors'
import 'dotenv/config'

const app: Express = express()
const port = 3001

app.use(cors())
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the inote API! \n Endpoints available at http://localhost:${port}/api/v1` })
})

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})