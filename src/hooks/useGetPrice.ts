import ccxt from 'ccxt';
import { useEffect, useState } from 'react';

const useGetPrice = (tickerSymbol: string) => {
  const [tickerPrice, setTicketPrice] = useState<undefined | number>(undefined);

  useEffect(() => {
    fetchTicker(tickerSymbol).then(symbolInfo => {
      setTicketPrice(symbolInfo.average);
    });
  }, [tickerSymbol]); 

  const fetchTicker = async (tickerSymbol: string) => {
    let binance  = new ccxt.binance ({ verbose: true, })
    return await binance.fetchTicker (tickerSymbol, {});
  } 

  return tickerPrice;
}

export default useGetPrice;