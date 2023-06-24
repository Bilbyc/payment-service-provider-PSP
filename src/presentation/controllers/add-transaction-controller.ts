import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class AddTransactionController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 400,
      body: { message: 'working' }
    }
  }
}
