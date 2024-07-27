import React, { useEffect, useState } from 'react';
import alarm from './assets/alram.png'; // Ensure the path is correct

function Clock() {
    const [time, setTime] = useState(new Date());
    const [selectedHour, setSelectedHour] = useState('Hour');
    const [selectedMinute, setSelectedMinute] = useState('Minute');
    const [selectedSecond, setSelectedSecond] = useState('Second');
    const [selectedMeridian, setSelectedMeridian] = useState('AM/PM');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`;
    }

    function padZero(number) {
        return (number < 10 ? '0' : '') + number;
    }

    function handleSetAlarm() {
        
        console.log(`Alarm set for ${selectedHour}:${selectedMinute}:${selectedSecond} ${selectedMeridian}`);
        alert(`Alarm set for ${selectedHour}:${selectedMinute}:${selectedSecond} ${selectedMeridian}`);
    }

    function handleResetAlarm(){
        console.log('Alarm Cleared.');
        alert('Alarm Cleared.');
    }

    function generateOptions(start, end) {
        const options = [];
        for (let i = start; i <= end; i++) {
            const value = i < 10 ? `0${i}` : i;
            options.push(<option key={value} value={value}>{value}</option>);
        }
        return options;
    }

    return (
        <div>
            <div className='clock-cont'>
                <img src={alarm} className='brudda' alt='Alarm' />
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
            <div className='wrapper'>
                <div className='content'>
                    <div className='column'>
                        <select value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
                            <option value="Hour" hidden>Hour</option>
                            {generateOptions(1, 12)}
                        </select>
                    </div>
                    <div className='column'>
                        <select value={selectedMinute} onChange={(e) => setSelectedMinute(e.target.value)}>
                            <option value="Minute" hidden>Minute</option>
                            {generateOptions(0, 59)}
                        </select>
                    </div>
                    <div className='column'>
                        <select value={selectedSecond} onChange={(e) => setSelectedSecond(e.target.value)}>
                            <option value="Second" hidden>Second</option>
                            {generateOptions(0, 59)}
                        </select>
                    </div>
                    <div className='column'>
                        <select value={selectedMeridian} onChange={(e) => setSelectedMeridian(e.target.value)}>
                            <option value="AM/PM" hidden>AM/PM</option>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                    <div className='column'>
                        <button type='button' onClick={handleSetAlarm}>Set Alarm</button>
                        
                    </div>
                    <div className='column'>
                    <button type='button' onClick={handleResetAlarm}>Reset Alarm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clock;