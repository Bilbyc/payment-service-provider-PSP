import { Router } from 'express'
import transactionRoutes from '../routes/transaction-routes'

export const route = Router()

transactionRoutes(route)

route.get('/', (req, res) => {
  res.json({ message: 'Default response - Server running' })
})
