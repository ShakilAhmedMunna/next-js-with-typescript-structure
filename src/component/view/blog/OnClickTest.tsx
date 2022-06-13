import React, { useEffect, useState } from "react";
import OnClickTestInterface from "../../interface/OnClickTestInterface";

const OnClickTest = ({
    backHandleDataCallback,
}: OnClickTestInterface): JSX.Element => {
    let [process, setProcess] = useState(0);

    useEffect(() => {
        backHandleDataCallback(process);
    }, [process]);

    const handleIncrement = () => {
        setProcess(process++);
    };

    const handleDecrement = () => {
        setProcess(process--);
    };

    return (
        <>
            <button type="button" onClick={handleIncrement}>
                Increment
            </button>

            <button type="button" onClick={handleDecrement}>
                Decrement
            </button>
        </>
    );
};

export default OnClickTest;
