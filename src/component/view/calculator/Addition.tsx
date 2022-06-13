import React from "react";

interface AdditionInterface {
  firstNumber: number,
  secondNumber: number,
}

const Addition = ({ firstNumber, secondNumber }: AdditionInterface) => {

  return (
    <>
      {firstNumber} and {secondNumber} = {firstNumber + secondNumber}

    </>
  );
};

export default Addition;