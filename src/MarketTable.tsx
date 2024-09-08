import { useEffect, useState } from "react";
import { ContinueButton } from "./ContinueButton";
interface PriceData {
    id: string;
    company: string;
    [key: string]: number | string;
}
export function MarketTable({marketYear}: {marketYear: number}) {
    const [data, setData] = useState<PriceData[]>([]);
    const [shares, setShares] = useState<{[key: string]: number}>({});
    const [initialCash, setInitialCash] = useState<{ [key: number]: number }>({ 
        1920: 150,
        1921: 0,
        1922: 0,
        1924: 0,
        1926: 0,
        1927: 0,
        1928: 0,
        1929: 0,
    });
    const [currentYear, setCurrentYear] = useState(1920);
    const [remainingCash, setRemainingCash] = useState(initialCash[currentYear]);
    const [errorMessage, setErrorMessage] = useState('');

const fetchMarketData = async () => {
    try {
        const response = await fetch('/api/prices.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debugging: Log the fetched data
        setData(data);
    } catch (error) {
        console.error("Error fetching market data:", error); // Debugging: Log any errors
    }
};
useEffect(() => { fetchMarketData(); }, []);
useEffect(() => {
    const totalCost = data.reduce((total, item) => 
        total + (item[marketYear] as number) * (shares[item.id] || 0), 0
    );
    setRemainingCash(initialCash[marketYear] - totalCost);
}, [shares, data, marketYear, initialCash]);

const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const value = e.target.valueAsNumber;
    setShares((prevShares) => ({
        ...prevShares,
        [id]: isNaN(value) ? 0 : value,
    }));
};

const buyShares = () => {
    if (remainingCash < -4000) {
        setErrorMessage('The bank will not lend you more than $4000, since that is the value of your farm. Please make sure your remaining cash is greater than $-4000 and try again.');
    } else {
        const currentYearIndex = marketYears.indexOf(marketYear);
        if (currentYearIndex < marketYears.length - 1) {
            const nextYear = marketYears[currentYearIndex + 1];
            setInitialCash((prevInitialCash) => ({
                ...prevInitialCash,
                [nextYear]: remainingCash,
            }));
            setErrorMessage('');
        } else {
            setErrorMessage('You have reached the last year in the market years array.');
        }
    }
};

const resetShares = () => {
    setShares({});
    setRemainingCash(initialCash);
    setErrorMessage('');};

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(parseInt(e.target.value, 10));
    };
    return (
        <div>
                
        <h2>Choose Your Stocks For {marketYear}</h2>
        <p>You have ${initialCash} to spend.</p>
        <p><strong>Warning: If your amount of cash remaining is negative, you are in debt. If you end the game in debt, you might lose your farm!</strong></p>
        <button onClick={resetShares}>Reset</button>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Price</th>
              <th>Shares</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={4}>No data available</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.company}</td>
                                <td>${item[marketYear]}</td>
                                <td><input 
                                type="number" 
                                value={shares[item.id] || ''}
                                onChange={(e) => onChangeInput(e, item.id)}/></td>
                                <td>${(item[marketYear] as number) * (shares[item.id] || 0)}</td>
                            </tr>
                        ))
                    )}
                            <tr>
                    <td colSpan={3} style={{textAlign: "right"}} ><strong>Total Cost</strong></td>
                    <td>
                        <strong>
                            ${data.reduce((total, item) => 
                                total + (item[marketYear] as number) * (shares[item.id] || 0), 0
                            )}
                        </strong>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3} style={{textAlign: "right"}}>Cash Remaining:</td>
                    <td>${remainingCash}</td></tr>

                </tbody>
        </table>
        <button onClick={buyShares} >Buy Shares</button>
        <p><strong>{errorMessage}</strong></p>
        <ContinueButton marketYear={marketYear} incrementYear={incrementYear} />
      </div>);
}
export default MarketTable;