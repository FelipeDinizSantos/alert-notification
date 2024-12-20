import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./NotificationAlert.scss";

export default function NotificationAlert({
    message,
    visible,
    setVisible
}: {
    message: string;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}) {
    const [progress, setProgress] = useState(100); 

    useEffect(() => {
        if (visible) {
            setProgress(100);

            const interval = setInterval(() => {
                setProgress((prev) => Math.max(prev - 5, 0)); 
            }, 150);

            const timeout = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [visible, setVisible]);

    return (
        <div className={`notification-alert ${visible ? "show" : ""}`}>
            <p>{message}</p>
            <div
                className="notification-header"
                style={{ width: `${progress}%` }} 
            ></div>
        </div>
    );
}
