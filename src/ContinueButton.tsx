import StockMarket from "./StockMarket";
import React, {useState} from "react";

export function ContinueButton({ marketYear }: { marketYear: number }) {
    const [marketYear, setMarketYear] = useState('');
    function goToMarket() {
setMarketYear(marketYear);

    }
    return (
        <div className="continue-button">
            <button
            onClick={goToMarket}>Continue to {marketYear}</button>
            </div>
        
    );
}