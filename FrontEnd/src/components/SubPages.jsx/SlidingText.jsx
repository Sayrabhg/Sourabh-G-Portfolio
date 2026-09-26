import { useState, useEffect } from "react";

export default function TypingText1() {
    const message = "A Java FullStack developer ";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => {
                if (index === message.length - 1) {
                    setIndex(0);   // restart from first letter
                    return "";
                }
                setIndex(index + 1);
                return prev + message.charAt(index);
            });
        }, 60); // speed (ms)

        return () => clearInterval(interval);
    }, [index, message]);

    return (
        <h3 className='py-3' style={{ textAlign: 'left', fontStyle: 'italic' }}>I'm <span style={{ color: 'rgb(236, 255, 69)' }}>{text}</span></h3>
    );
}

export function TypingText2() {
    const message = "A Wordpress developer ";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prev) => {
                if (index === message.length - 1) {
                    setIndex(0);   // restart from first letter
                    return "";
                }
                setIndex(index + 1);
                return prev + message.charAt(index);
            });
        }, 60); // speed (ms)

        return () => clearInterval(interval);
    }, [index, message]);

    return (
        <h3 className='py-3' style={{ textAlign: 'left', fontStyle: 'italic' }}>I'm <span style={{ color: 'rgb(133, 255, 67)' }}>{text}</span></h3>
    );
}
