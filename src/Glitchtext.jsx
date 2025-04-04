import { useEffect, useState, useRef } from "react";

function GlitchText({ text }) {
    const [glitchedChars, setGlitchedChars] = useState(text.split(""));
    const intervalRef = useRef(null);
    const symbols = "}!@#$%^&*()_+-=[]{}|;:,.<>?";
    const colors = ["#FFA052", "#FF5E5E", "#5EFFB0", "#5EDBFF", "#D95EFF", "#FFE45E"];

    const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    const startGlitch = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            const scrambled = text.split("").map(() => ({
                char: getRandomSymbol(),
                color: getRandomColor(),
            }));
            setGlitchedChars(scrambled);
        }, 100);
    };

    const stopGlitch = () => {
        clearInterval(intervalRef.current);
        setGlitchedChars(text.split("").map((char) => ({ char, color: "#FFA052" })));
    };

    useEffect(() => {
        stopGlitch(); // Initieel de normale tekst tonen
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <h1
            className="text-3xl md:text-5xl font-bold transition-all duration-300 cursor-default inline-block"
            style={{ width: `${text.length}ch` }}
            onMouseEnter={startGlitch}
            onMouseLeave={stopGlitch}
        >
            {glitchedChars.map((item, idx) => (
                <span key={idx} style={{ color: item.color }}>
                    {item.char}
                </span>
            ))}
        </h1>
    );
}

export default GlitchText;
