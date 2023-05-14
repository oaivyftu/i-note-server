import express, { Express, Request, Response } from 'express';
import { sequelize } from './models'

const app: Express = express()
const port = 3001

app.use(express.static(`${__dirname}/public`))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.get('/sync', async (req: Request, res: Response) => {
    try {
        await sequelize.sync()
        res.send('Sync successfully')
    } catch (e) {
        console.log(e)
    }

})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})