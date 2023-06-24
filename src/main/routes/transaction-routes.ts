import { Router } from 'express'
import { AddTransactionController } from './../../presentation/controllers/add-transaction-controller'
import { routeAdapter } from '../middlewares/route-adapter'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.post('/transaction/add', routeAdapter(new AddTransactionController()))
}
