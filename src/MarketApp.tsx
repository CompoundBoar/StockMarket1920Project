import { useState } from "react";
import MarketTable from "./MarketTable";
import { ContinueButton } from "./ContinueButton";

const marketYears = [1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929];

export function MarketApp() {
    const [marketYearIndex, setMarketYearIndex] = useState(0);

    const incrementYear = () => {
        if (marketYearIndex < marketYears.length - 1) {
            setMarketYearIndex(marketYearIndex + 1);
        }
    };

    const currentYear = marketYears[marketYearIndex];

    return (
        <div>
            <MarketTable marketYear={currentYear} />
            <ContinueButton marketYear={currentYear} incrementYear={incrementYear} />
        </div>
    );
}