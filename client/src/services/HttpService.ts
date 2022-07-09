import axios from "axios";

export class HttpService {
  http: any;

  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:5000/v1/',
      headers: { 'X-App-Key': 'P@n6a' }
    });
  }

  async add(url: string, data: any) {
    return await this.http.post(url, data);
  }

  async queryAll(url: string) {
    let data = await this.http.get(url);

    if (data.status === 200) return data.data;
    else return [];
  }

  async queryById(url: string, id: string) {
    return await this.http.get(url + id);
  }
}