import { client } from '../utils/client';

export async function getRates() {
  const response = await client.get('/rates.json');
  return response.data;
}

export async function getTransactionHistory() {
  const response = await client.get('/transaction_history.json');
  return response.data;
}
