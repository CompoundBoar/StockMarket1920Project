import { useEffect, useState } from 'react';

interface HeadlineData {
    id: string;
    company: string;
    [key: string]: number | string;
}

export function Headlines({ marketYear }: { marketYear: number }) {
    const [data, setData] = useState<HeadlineData[]>([]); 

    const fetchHeadlines = async () => {
        try {
            const response = await fetch('/api/headlines.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched data:", data); // Debugging: Log the fetched data
            setData(data);
        } catch (error) {
            console.error("Error fetching headlines:", error); // Debugging: Log any errors
        }
    };
    useEffect(() => { fetchHeadlines(); }, []);
}