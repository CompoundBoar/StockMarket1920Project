import StockMarket from "./StockMarket";
import React, { useState } from "react";

export function MarketButton({ marketYear }: { marketYear: number }) {
    const [showStockMarket, setShowStockMarket] = useState(false);

    function goToMarket() {
        setShowStockMarket(true);
    }


    return (
        <div className="continue-button">
            <button onClick={goToMarket}>Buy Stocks for {marketYear}</button>
            {showStockMarket && <StockMarket marketYear={marketYear} />}
        </div>
    );
}