import axios from 'axios';

export default class AuthServices {
  static async getStocksApi(nameStocks: string, params?: string) {
    try {
      // Api para obtener información respecto a las accion seleccionada
      const dataApi = await axios.get(`http://api.marketstack.com/v1/eod?access_key=f016f17ac50524c28f2b5db556ea2950&sort=ASC&limit=4000&symbols=${nameStocks}${params}`);
      return dataApi.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}