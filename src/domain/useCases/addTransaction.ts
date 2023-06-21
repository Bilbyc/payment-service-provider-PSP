import { TransactionModel } from './../models/transaction'

export interface AddTransactionModel {
  transaction_value: number
  description: string
  payment_method: string
  card_number: string
  bearer_name: string
  card_expire_date: Date
  cvv: number
}

export interface AddTransaction {
  add: (transaction: AddTransactionModel) => Promise<TransactionModel>
}
