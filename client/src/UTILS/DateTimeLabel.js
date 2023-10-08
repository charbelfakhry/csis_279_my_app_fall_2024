import React, { useEffect, useState } from "react";

// you can use moment library
const DateTimeLabel = (isMilitary) => {

    const [time, setTime] = useState(new Date());
    // 00:13:44 AM 5/20/2023;

    useEffect(()=>{
        upateDateTime();
    }, []);

    const upateDateTime = () =>{
        // interval or timer that repeats every 1000 ms or one sec.
        const interval = setInterval(()=>{
            setTime(new Date());
        }, 1000);
    }

    const formatTime = () =>{
        // get the times from the date object in the state
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        // convert the time to AM/PM 
        const ampOrPm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours || 12;
        
        // set a zero before minutes-seconds for formatting issue.
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        const formattedTime = `${hours}:${minutes}:${seconds} ${ampOrPm}`;
        return formattedTime;
    }

    const formatTimeMilitary = () =>{
        const formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        return formattedTime;
    }

    const formatDate = () => {
        return `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;
    }

    return(
        <React.Fragment>
            {formatDate()} on {isMilitary ? formatTimeMilitary() : formatTime()}
        </React.Fragment>
    )
};

export default DateTimeLabel;