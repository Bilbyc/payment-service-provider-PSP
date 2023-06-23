import { Router } from 'express'
import { route } from './../config/routes'

export const routes = Router()

routes.use(route)
