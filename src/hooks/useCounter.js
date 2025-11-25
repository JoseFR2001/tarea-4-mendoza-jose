import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () =>
    setCount((prev) => (prev > 1 ? prev - 1 : prev));

  const handleReset = () => {
    setCount(initialValue);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
