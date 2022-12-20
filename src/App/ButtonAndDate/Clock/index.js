import "./style.css";
import { useState, useEffect } from "react"

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return date;
};

const Clock = () => {

    const date = useCurrentDate();
   
    return (
        <div className="date">
            {`${date.toLocaleDateString
                    (undefined,
                        {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        })}
                 `}
        </div>
    )
};

export default Clock;