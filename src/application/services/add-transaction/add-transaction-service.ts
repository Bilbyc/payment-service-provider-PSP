import { TransactionModel } from '../../../domain/models/transaction'
import { AddTransaction, AddTransactionModel } from '../../../domain/useCases/addTransaction'

export class AddTransactionService implements AddTransaction {
  async add (transaction: AddTransactionModel): Promise<TransactionModel> {
    return {
      transaction_value: 1,
      description: 'string',
      payment_method: 'string',
      card_number: 'string',
      bearer_name: 'string',
      card_expire_date: new Date(),
      cvv: 1
    }
  }
}
