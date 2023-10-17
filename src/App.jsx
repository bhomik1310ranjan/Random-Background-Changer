import { useEffect, useState } from "react";

function App() {
    const [color, setColor] = useState("rgb(0, 0, 0)");
    const [backgroundColor, setBackgroundColor] =
        useState("rgba(0, 0, 0, 0.1)");

    const getRandomInteger = (min, max) =>
        Math.floor(Math.random() * (max - min)) + min;

    useEffect(() => {
        const interval = setInterval(() => {
            const redIntensity = getRandomInteger(0, 256);
            const greenIntensity = getRandomInteger(0, 256);
            const blueIntensity = getRandomInteger(0, 256);
            setColor(
                `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`
            );
            setBackgroundColor(
                `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity}, 0.1)`
            );
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-full min-h-screen flex justify-center items-center"
            style={{ backgroundColor: backgroundColor }}
        >
            <div className="w-11/12 md:w-10/12 max-w-md mx-auto">
                <h1
                    className="font-bold text-2xl text-center tracking-wider"
                    style={{ color: color }}
                >
                    Random Background Changer
                </h1>
            </div>
        </div>
    );
}

export default App;
