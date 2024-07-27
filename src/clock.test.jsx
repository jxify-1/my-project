import React, { useEffect, useState } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${meridian}`;
    }

    return (
        <div className='clock-cont'>
            <div className='clock'>
                <span>{formatTime()}</span>
                <div clas="buttons">
<a class="btn1" href="#">Set Alarm</a> <br />
<a class="btn2" href="#"onClick={r}>Reset Alarm</a>

</div>
            </div>
        </div>
    );
}

export default Clock;