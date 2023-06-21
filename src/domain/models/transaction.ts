export interface TransactionModel {
  transaction_value: number
  description: string
  payment_method: string
  card_number: string
  bearer_name: string
  card_expire_date: Date
  cvv: number
}
