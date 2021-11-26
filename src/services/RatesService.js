import { APIService } from './ApiService';

export class RatesService extends APIService {
  static async getRates() {
    try {
      const response = await this.get('/web/rates.json');
      console.log(response);
    } catch (err) {
      // TODO: implement this
      console.log(err);
    }
  }
}
