import axios from 'axios';
import { useState, useEffect } from 'react';

export const useCurrencies = () => {
    const [currencies, setCurrencies] = useState({
        status: "loading"
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setCurrencies({
                    date: response.data.date,
                    rate: response.data.rates,
                    status: "success"
                });
            } catch (error) {
                setCurrencies({
                    status: "error"
                });
            }
        })();
    }, []);


    return currencies;
};