import { Router } from 'express'

export const route = Router()

route.get('/', (req, res) => {
  res.json({ message: 'Default response - Server running' })
})
