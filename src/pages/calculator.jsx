import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState("");

  // Handle number button clicks
  const handleClick = (e) => {
    const value = e.target.value;
    if (operator === "") {
      setNum1(num1 + value);
    } else {
      setNum2(num2 + value);
    }
  };

  const handleOperator = (e) => {
    if (num1 === "") return;
    setOperator(e.target.value);
  };

  const handleEqual = () => {
    if (num1 === "" || num2 === "" || operator === "") return;
    let calculation;
    switch (operator) {
      case "+":
        calculation = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        calculation = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        calculation = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        calculation = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    setResult(calculation);
    setNum1("");
    setNum2("");
    setOperator("");
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("");
    setOperator("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
        <input
          className="w-full h-12 text-white text-right text-xl font-bold bg-gray-900 p-2 rounded mb-4"
          type="text"
          value={num1 + operator + num2}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClick} value="7" className="btn">
            7
          </button>
          <button onClick={handleClick} value="8" className="btn">
            8
          </button>
          <button onClick={handleClick} value="9" className="btn">
            9
          </button>
          <button onClick={handleOperator} value="/" className="btn-operator">
            /
          </button>

          <button onClick={handleClick} value="4" className="btn">
            4
          </button>
          <button onClick={handleClick} value="5" className="btn">
            5
          </button>
          <button onClick={handleClick} value="6" className="btn">
            6
          </button>
          <button onClick={handleOperator} value="*" className="btn-operator">
            *
          </button>

          <button onClick={handleClick} value="1" className="btn">
            1
          </button>
          <button onClick={handleClick} value="2" className="btn">
            2
          </button>
          <button onClick={handleClick} value="3" className="btn">
            3
          </button>
          <button onClick={handleOperator} value="-" className="btn-operator">
            -
          </button>

          <button onClick={handleClick} value="0" className="btn">
            0
          </button>
          <button onClick={handleClear} className="btn-clear">
            C
          </button>
          <button onClick={handleEqual} className="btn-equal">
            =
          </button>
          <button onClick={handleOperator} value="+" className="btn-operator">
            +
          </button>
        </div>
        {result && (
          <div className="text-white font-bold text-lg mt-4">
            Result: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
