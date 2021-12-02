import { Stocks, IStocks } from '../models';

export default class StocksRepository {
  static async getStocks() {
    try {
      const stocks = await Stocks.findAll() as IStocks[];
      return stocks;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }
}
