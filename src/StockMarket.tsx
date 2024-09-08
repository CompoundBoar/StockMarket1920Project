import * as React from 'react';
import MarketTable from './MarketTable';
interface StockMarketProps {marketYear: number}
export const StockMarket: React.FC<StockMarketProps> = ({ marketYear }) => {
    return (
        <div> 
        <MarketTable marketYear={marketYear}/>

</div>


    );

}

export default StockMarket;