import express, { Router, Request, Response } from 'express'

const app = express()

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'PSP project' })
})

app.use(route)

app.listen(3333, () => { console.log('server running on port 3333') })
