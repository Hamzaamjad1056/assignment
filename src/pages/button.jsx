import React, { useState } from "react";

const Button = () => {
  const [buttons, setButtons] = useState([1]);

  const handleIncrement = () => {
    let arr = buttons;
    arr.push(arr.length + 1);
    setButtons([...arr]);
  };

  const handlePress = (index) => {
    alert(`Button ${index + 1} pressed`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        {buttons.map((item, index) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <button
                onClick={() => handlePress(index)}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Button {item}
              </button>
              <button
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Button;
