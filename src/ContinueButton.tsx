import { Headlines } from "./Headlines";
import { useState } from "react";

interface ContinueButtonProps {
    marketYear: number;
    incrementYear: () => void;}

const ContinueButton: React.FC<ContinueButtonProps> = ({ marketYear, incrementYear }) => {
    const [showHeadlines, setShowHeadlines] = useState(false);

    function goToHeadlines() {
        setShowHeadlines(true);
        incrementYear();
    }

    return (
        <div className="continue-button">
            <button onClick={goToHeadlines}>Continue to {marketYear}</button>
            {showHeadlines && <Headlines marketYear={marketYear} />}
        </div>
    );
};
export default ContinueButton;