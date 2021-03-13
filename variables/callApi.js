import fetch from 'node-fetch';
import { HOST } from './host';

export default async function Service(endpoint, option) {
  const url = `${HOST}/api/${endpoint}`;
  try {
    const response = await fetch(url, {
      method: option.method || 'GET',
      body: (option.body && JSON.stringify(option.body)) || null,
      headers: {
        'Content-Type': 'application/json',
        'api-token': option.token || ''
      }
    });

    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    throw error;
  }
}
