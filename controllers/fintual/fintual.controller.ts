import { Request, Response } from 'express';
import StocksRepository from '../../repositories/stocks.repository';
import FintualServices from '../../services/fintual.service';

// Codigos de las acciones
const codes = [{
  id: 1,
  code: 'AAPL', // APPLE
}, {
  id: 2,
  code: 'GOOGL', // GOOGLE
}, {
  id: 3,
  code: 'LTMAQ', // LATAM
}, {
  id: 4,
  code: 'MELI' // MERCADOLIBRE
}];

export default class FintualController {
  
  // Obtención de la información de las acciones y calculos entre un rango de fecha
  static async getStocks(req: Request, res: Response) {
    try {
      let query = '';

      if (req.query.dateStart && req.query.dateEnd) {
        query = `&date_from=${req.query.dateStart}&date_to=${req.query.dateEnd}`;
      }

      const idCode = req.params.id;
      // Se filtra el codigo de la accion enviada
      const findCode = codes.find(x => x.id === +idCode);
      // Servicio que obtiene las acciones segun los parametros entregados
      const dataStocks = await FintualServices.getStocksApi(findCode.code, query);

      // Calculo de ganancias
      const calcProfits = calculateProfit(dataStocks.data);

      // Se filtra el primer y el ultimo dato obtenido de la colección
      const firstStock = dataStocks.data[0];
      const lastStock = dataStocks.data[dataStocks.data.length-1];

      // Se obtiene la diferencia de dias para calculo del rendimiento anualizado
      const dayDiff = getNumberOfDays(firstStock.date, lastStock.date);
      // Calculo del rendimiento anualizado
      const calcAnnualized = annualizedReturn(dayDiff, calcProfits);
      
      return res.json({
        data: dataStocks.data,
        calcProfits,
        calcAnnualized,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }

  // Obtención de un valor de acción especifico por fecha
  static async getStock(req: Request, res: Response) {
    try {
      let query = '';

      if (req.query.date) {
        query = `&date_from=${req.query.date}&date_to=${req.query.date}`;
      }

      const idCode = req.params.id;
      // Se filtra el codigo de la accion enviada
      const findCode = codes.find(x => x.id === +idCode);
      // Servicio que obtiene las acciones segun los parametros entregados
      const dataStocks = await FintualServices.getStocksApi(findCode.code, query);
      
      return res.json(dataStocks.data[0]);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
// Función encargada de calcular las ganancias
  function calculateProfit(data) {
    // Obtención del primer y ultimo registro de acciones
    const firstStock = data[0];
    const lastStock = data[data.length-1];

    // Calculo de ganancias ((valorActual - valorInicial)/valorInicial) * 100
    const calculate = (((+lastStock.close - +firstStock.close)/+firstStock.close) * 100);
    return calculate;
  }

  // Calculo de rendimiento anualizado
  function annualizedReturn(daysDiff, calcProfits) {
    // Diferencia de cias
    const countDay = +daysDiff;
    //  transformación %de ganancias
    const calcProf = calcProfits / 100;
    // Calculo de rendimiento anual ((ganancias) * (365/cantidadDias)) * 100
    const calculate = ((calcProf) * (365/countDay)) * 100;
    return calculate;
  }

  // Funcion para obtener la diferencia de dias
  function getNumberOfDays(start, end) {
    console.log(start.slice(0, 10))
    console.log(end.slice(0, 10))
    const date1 = new Date(start.slice(0, 10));
    const date2 = new Date(end.slice(0, 10));
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays + 1;
}
