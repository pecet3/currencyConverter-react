import "./style.css";
import {useState, useEffect} from "react"

const ShowDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);
        
        return () => {
            clearInterval(intervalId);
        }
    },[]);
    
    
    return (
        <div className="date">
            <p>{`${date}`}</p>
        </div>
    )
    };

export default ShowDate;