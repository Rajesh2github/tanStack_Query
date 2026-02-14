import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    clearInterval(id);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
        return ()=>{
            clearInterval(id);
        }
    }, []);
    return (
        <div className="progress-wrapper">
            <div className="progress-bar"
            style={{
                width: `${count*10}%`,
                backgroundColor: count > 5 ? 'green' : 'orange'
            }}
            >
            </div>
            <div className="progress-text">
                {`Progress status- ${count}`}
            </div>
        </div>
    )

};

export default ProgressBar;
