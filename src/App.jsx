import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleBtnClick = (value) => {
    if (value === "DEL") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      console.log(err);
      setInput("Error");
    }
  };

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <div className="App appTheme1">
      <main className="calculatorBody">
        <header>
          <h1 className="font-bold text-2xl">calc</h1>

          <div className="sliderContainer">
            <p className="text-xs font-bold">THEME</p>

            <div className="sliderGrp">
              <div className="flex flex-row justify-between items-center gap-1 text-xs font-semibold mb-1">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>

              <div className="slider">
                <div className="sliderBall"></div>
              </div>
            </div>
          </div>
        </header>

        <div className="resultDisplay">{input}</div>

        <div className="buttonsGrp">
          <button
            className="numBtn"
            value={7}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            7
          </button>
          <button
            className="numBtn"
            value={8}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            8
          </button>
          <button
            className="numBtn"
            value={9}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            9
          </button>
          <button
            className="bg-slate-400 p-2 rounded-xl font-bold text-2xl"
            value={"DEL"}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            DEL
          </button>

          <button
            className="numBtn"
            value={4}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            4
          </button>
          <button
            className="numBtn"
            value={5}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            5
          </button>
          <button
            className="numBtn"
            value={6}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            6
          </button>
          <button
            className="numBtn"
            value={"+"}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            +
          </button>

          <button
            className="numBtn"
            value={1}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            1
          </button>
          <button
            className="numBtn"
            value={2}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            2
          </button>
          <button
            className="numBtn"
            value={3}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            3
          </button>
          <button
            className="numBtn"
            value={"-"}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            -
          </button>

          <button
            className="numBtn"
            value={"."}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            .
          </button>
          <button
            className="numBtn"
            value={0}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            0
          </button>
          <button
            className="numBtn"
            value={"/"}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            /
          </button>
          <button
            className="numBtn"
            value={"*"}
            onClick={(e) => handleBtnClick(e.target.value)}
          >
            x
          </button>

          <button
            className="bg-slate-400 border-b-4 border-slate-600 p-2 rounded-xl font-bold text-2xl col-span-2"
            onClick={() => setInput("")}
          >
            RESET
          </button>
          <button
            className="bg-red-500 border-b-4 border-red-700 p-2 rounded-xl font-bold text-2xl col-span-2"
            value={"="}
            onClick={handleCalculate}
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
