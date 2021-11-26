import { client } from '../utils/client';

export class APIService {
  static client = client;

  static get(url) {
    return this.client.get(url);
  }

  // post, put, delete, etc but not required...
}
