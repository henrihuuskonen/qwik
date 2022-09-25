import {useEffect, useState} from "react";

const Clock = () => {
    const [store, setStore] = useState({
        hour: 10,
        minute: 20,
        second: 30,
    });

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setStore({
                second: now.getSeconds() * (360 / 60),
                minute: now.getMinutes() * (360 / 60),
                hour: now.getHours() * (360 / 12)
            })
        };
        update();
        const tmrId = setInterval(update, 1000);
        return () => clearInterval(tmrId);
    },[]);

    return (
        <div className="clock">
            <div className="twelve"></div>
            <div className="three"></div>
            <div className="six"></div>
            <div className="nine"></div>
            <div className="hour" style={{transform: `rotate(${store.hour}deg)`}}></div>
            <div className="minute" style={{transform: `rotate(${store.minute}deg)`}}></div>
            <div className="second" style={{transform: `rotate(${store.second}deg)`}}></div>
        </div>
    );
}

export default Clock