import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom Button Component
const CalcButton = ({ label, onClick, variant }) => {
  return (
    <button
      style={{ border: "1px solid #8ec549", borderRadius: "20px" }}
      variant={variant || "secondary"}
      className="w-100 p-3 fs-4"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default function Calculator() {
  const [input, setInput] = useState("");
  const [lastExpression, setLastExpression] = useState("");
  const [isResult, setIsResult] = useState(false); // Track if input is a result

  const handleClick = (value) => {
    value === "="
      ? input !== ""
        ? (setLastExpression(input), setInput(eval(input).toString()), setIsResult(true))
        : null
      : value === "C"
      ? (setInput(""), setLastExpression(""), setIsResult(false))
      : value === "X"
      ? setInput((prev) => (isResult ? (setIsResult(false), lastExpression) : prev.slice(0, -1)))
      : value === "+/-"
      ? setInput((prev) => (prev ? (prev.startsWith("-") ? prev.slice(1) : "-" + prev) : prev))
      : ["+", "-", "*", "/"].includes(value)
      ? (setLastExpression(input), setInput(isResult ? eval(input).toString() + value : input + value), setIsResult(false))
      : setInput(isResult ? (setIsResult(false), value) : input + value);
  };
  
  

  return (
    <div>
    <div className="heading h1 text-center">
            Nani Calculator
        </div>
    <div
      className="mx-auto mt-5 p-4 border rounded shadow bg-white text-center"
      style={{ maxWidth: "320px" }}
    >
        
      {/* Display Input */}
      <input
        type="text"
        style={{ outline: "none", boxShadow: "none", caretColor: "#1d75c1", caretShape:"bar" }}
        className="text-end fs-3 mb-4 w-100 border-0 border-bottom border-primary"
        value={input}
        
      />

      {/* Buttons Grid */}
      <div className="row">
        {["C", "X", "+/-", "/"].map((val) => (
          <div key={val} className="col-3 mb-2 px-2">
            <CalcButton
              label={val}
              onClick={handleClick}
              variant={
                val === "="
                  ? "success"
                  : val === "C"
                  ? "danger"
                  : val === "X"
                  ? "warning"
                  : "secondary"
              }
            />
          </div>
        ))}
        {["7", "8", "9", "*"].map((val) => (
          <div className="col-3 mb-2 px-2" key={val}>
            <CalcButton label={val} onClick={handleClick} />
          </div>
        ))}
        {["4", "5", "6", "-"].map((val) => (
          <div key={val} className="col-3 mb-2 px-2">
            <CalcButton label={val} onClick={handleClick} />
          </div>
        ))}
        {["1", "2", "3", "+"].map((val) => (
          <div key={val} className="col-3 mb-2 px-2">
            <CalcButton label={val} onClick={handleClick} />
          </div>
        ))}
        {["%", "0", ".", "="].map((val) => (
          <div className="col-3 mb-2 px-2" key={val}>
            <CalcButton label={val} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
