import StockMarket from "./StockMarket";
import React, { useState } from "react";

export function ContinueButton({ marketYear }: { marketYear: number }) {
    const [showStockMarket, setShowStockMarket] = useState(false);

    function goToMarket() {
        setShowStockMarket(true);
    }


    return (
        <div className="continue-button">
            <button onClick={goToMarket}>Continue to {marketYear}</button>
            {showStockMarket && <StockMarket marketYear={marketYear} />}
        </div>
    );
}