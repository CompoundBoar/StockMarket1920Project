interface StockMarketProps {marketYear: number}
export const StockMarket: React.FC<StockMarketProps> = ({ marketYear }) => {
    return (
        <div> <h2 className='header'>Choose Your Stocks for {marketYear}</h2>
</div>
    );

}

export default StockMarket;