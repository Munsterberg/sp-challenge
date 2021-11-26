import { APIService } from './ApiService';

export class TransactionsService extends APIService {
  static async getTransactions() {
    try {
      const response = await this.get('/web/rates.json');
      console.log(response);
    } catch (err) {
      // TODO: implement this
      console.log(err);
    }
  }
}
