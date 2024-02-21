import './datetime.css';
import React, { useState, useEffect } from "react";

export default function Datetime() {
    const [city, setCity] = useState('Kiev');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
            setTime(new Date()); // обновляем и время
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function setCityHandler(){
        setCity('Kiev');
    }

    function handleTimeChange(event) {
        setTime(new Date(event.target.value));
    }

    return (
        <div className="Datetime">
            <h2>{city}</h2>
            <h1>{time.toTimeString().substring(0,5)}</h1>
            <p>{date.toDateString()}</p>
        </div>
    );
}
