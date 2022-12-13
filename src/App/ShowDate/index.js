import "./style.css";
import { useState, useEffect } from "react"

const ShowDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);


    return (
        <div className="date">
                {`${
                    date.toLocaleDateString
                        ("pl-PL",
                            {
                                weekday: "long", day: "numeric", month: "long", year: "numeric"
                            })},
                 ${date.toLocaleTimeString()
                 }`}
        </div>
    )
};

export default ShowDate;