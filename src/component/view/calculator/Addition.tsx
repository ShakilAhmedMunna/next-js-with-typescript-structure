import React from "react";
import { AdditionInterface } from "../../interface/AdditionInterface";

const Addition = ({ firstNumber, secondNumber }: AdditionInterface) => {
    return (
        <>
            {firstNumber} and {secondNumber} = {firstNumber + secondNumber}
        </>
    );
};

export default Addition;
