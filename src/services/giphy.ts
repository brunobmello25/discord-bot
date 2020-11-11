import axios, { AxiosInstance } from 'axios';

import credentials from '../config/credentials.json';

class Giphy {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.giphy.com/v1',
      headers: { api_key: credentials.giphyApiKey },
    });
  }

  public async searchGifByWord(word: string): Promise<string> {
    const response = await this.api.get(`/gifs/random?tag=${word}`);

    return response.data.data.url as string;
  }
}

export default new Giphy();
