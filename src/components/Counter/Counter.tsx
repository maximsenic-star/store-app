import { useState } from "react";
import { Button } from "../ui/Button/Button";

export const Counter = () => {
  const headingText = "Counter";
  const [count, setCount] = useState<number>(0);
  // принимает intitial state - начальное значение стейта
  // возврщает tuple (кортеж - массив) в котором на первой позиции
  // - переменная состояния (state)
  // на второй позиции - сеттер для этого стейта
  // для создания состояния внутри компонента - при изменении которого -
  // происходит rerender компонента

  // hook

  function handlePlus() {
    // console.log("Plus");
    // setCount(15);
    setCount((prev) => prev + 1);
    // console.log(count);
  }

  function handleMinus() {
    setCount((prev) => prev - 1);
  }

  function handleClear() {
    setCount(0);
  }

  return (
    <div>
      <h2>{headingText}</h2>

      {/* <button type="button" onClick={handleMinus}>
        -
      </button> */}

      <Button onClick={handleMinus}>-</Button>

      <div>Count: {count}</div>

      {/* <button type="button" onClick={handlePlus}>
        +
      </button> */}
      {/* <button type="button" onClick={handleClear}>
        Clear
      </button> */}

      <Button onClick={handlePlus} variant="secondary">
        +
      </Button>
      <Button onClick={handleClear} variant="danger">
        Clear
      </Button>
    </div>
  );
};
