import { AddTransaction } from '../../../domain/useCases/addTransaction'

export class AddAccountService implements AddTransaction {
  async add (): Promise<any> {
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
