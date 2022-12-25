import axios from 'axios';
import { useState, useEffect } from 'react';

export const useCurrencies = () => {
    const [currencies, setCurrencies] = useState({
        status: "loading"
    });

    useEffect(() => {
        const getCurrencies = async () => {
            try {
                const response = await axios.get(
                    "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,CZK,CHF,GBP,JPY,AUD,CAD,SEK,UAH"
                    );
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
        };
        setTimeout(getCurrencies, 1000)
    }, []);


    return currencies;
};