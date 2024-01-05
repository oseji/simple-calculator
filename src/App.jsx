import { useState, useRef, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const appRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderBallRef = useRef(null);
  const resultContainerRef = useRef(null);
  const btnsGrpRef = useRef(null);
  const equalsRef = useRef(null);
  const delAndResetBtns = [useRef(null), useRef(null)];
  const numBtnRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

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

  const toggleTheme = (value) => {
    console.log(value);

    const App = appRef.current;
    const resultContainer = resultContainerRef.current;
    const slider = sliderRef.current;
    const sliderBall = sliderBallRef.current;
    const btnsGrp = btnsGrpRef.current;
    const euqalBtn = equalsRef.current;

    if (value === "2") {
      delAndResetBtns.forEach((btn) => {
        const butn = btn.current;
        butn.classList.remove("delAndResetColor1");
        butn.classList.remove("delAndResetColor3");
        butn.classList.add("delAndResetColor2");
      });

      numBtnRefs.forEach((button) => {
        const btns = button.current;
        btns.classList.add("numBtnColorMain");
        btns.classList.remove("numBtnColorAlt");
      });

      euqalBtn.classList.remove("equalColor1");
      euqalBtn.classList.remove("equalColor3");
      euqalBtn.classList.add("equalColor2");

      slider.classList.remove("sliderContainerColorMain");
      slider.classList.add("sliderContainerColorAlt");

      sliderBall.classList.remove("sliderColor1");
      sliderBall.classList.remove("sliderColor3");
      sliderBall.classList.add("sliderColor2");
      sliderBall.classList.remove("moveSlider3");
      sliderBall.classList.add("moveSlider2");

      App.classList.remove("appTheme1");
      App.classList.remove("appTheme3");
      App.classList.add("appTheme2");

      resultContainer.classList.remove("resultTheme1");
      resultContainer.classList.remove("resultTheme3");
      resultContainer.classList.add("resultTheme2");

      btnsGrp.classList.remove("buttonsGrpTheme1");
      btnsGrp.classList.remove("buttonsGrpTheme3");
      btnsGrp.classList.add("buttonsGrpTheme2");
    } else if (value === "3") {
      delAndResetBtns.forEach((btn) => {
        const butn = btn.current;
        butn.classList.remove("delAndResetColor1");
        butn.classList.remove("delAndResetColor2");
        butn.classList.add("delAndResetColor3");
      });

      numBtnRefs.forEach((button) => {
        const btns = button.current;
        btns.classList.remove("numBtnColorMain");
        btns.classList.add("numBtnColorAlt");
      });

      slider.classList.add("sliderContainerColorMain");
      slider.classList.remove("sliderContainerColorAlt");

      euqalBtn.classList.remove("equalColor1");
      euqalBtn.classList.remove("equalColor2");
      euqalBtn.classList.add("equalColor3");

      sliderBall.classList.remove("sliderColor1");
      sliderBall.classList.remove("sliderColor2");
      sliderBall.classList.add("sliderColor3");
      sliderBall.classList.add("moveSlider3");
      sliderBall.classList.remove("moveSlider2");

      App.classList.remove("appTheme1");
      App.classList.remove("appTheme2");
      App.classList.add("appTheme3");

      resultContainer.classList.remove("resultTheme1");
      resultContainer.classList.remove("resultTheme2");
      resultContainer.classList.add("resultTheme3");

      btnsGrp.classList.remove("buttonsGrpTheme1");
      btnsGrp.classList.remove("buttonsGrpTheme2");
      btnsGrp.classList.add("buttonsGrpTheme3");
    } else if (value === "1") {
      delAndResetBtns.forEach((btn) => {
        const butn = btn.current;
        butn.classList.remove("delAndResetColor2");
        butn.classList.remove("delAndResetColor3");
        butn.classList.add("delAndResetColor1");
      });

      numBtnRefs.forEach((button) => {
        const btns = button.current;
        btns.classList.add("numBtnColorMain");
        btns.classList.remove("numBtnColorAlt");
      });

      euqalBtn.classList.remove("equalColor2");
      euqalBtn.classList.remove("equalColor3");
      euqalBtn.classList.add("equalColor1");

      slider.classList.remove("sliderContainerColorMain");
      slider.classList.add("sliderContainerColorAlt");

      sliderBall.classList.remove("sliderColor2");
      sliderBall.classList.remove("sliderColor3");
      sliderBall.classList.add("sliderColor1");
      sliderBall.classList.remove("moveSlider3");
      sliderBall.classList.remove("moveSlider2");

      App.classList.remove("appTheme2");
      App.classList.remove("appTheme3");
      App.classList.add("appTheme1");

      resultContainer.classList.remove("resultTheme2");
      resultContainer.classList.remove("resultTheme3");
      resultContainer.classList.add("resultTheme1");

      btnsGrp.classList.remove("buttonsGrpTheme2");
      btnsGrp.classList.remove("buttonsGrpTheme3");
      btnsGrp.classList.add("buttonsGrpTheme1");
    }
  };

  useEffect(() => {
    numBtnRefs.forEach((button) => {
      const btns = button.current;
      btns.classList.add("numBtnColorMain");
    });
  }, []);

  return (
    <div className="App appTheme1" ref={appRef}>
      <main className="calculatorBody">
        <header>
          <h1 className="font-bold text-2xl">calc</h1>

          <div className="sliderContainer">
            <p className="text-xs font-bold">THEME</p>

            <div className="sliderGrp">
              <div className="flex flex-row justify-between items-center gap-1 text-xs font-semibold mb-1">
                <p
                  className="cursor-pointer"
                  data-value="1"
                  onClick={(e) => toggleTheme(e.target.dataset.value)}
                >
                  1
                </p>
                <p
                  className="cursor-pointer"
                  data-value="2"
                  onClick={(e) => toggleTheme(e.target.dataset.value)}
                >
                  2
                </p>
                <p
                  className="cursor-pointer"
                  data-value="3"
                  onClick={(e) => toggleTheme(e.target.dataset.value)}
                >
                  3
                </p>
              </div>

              <div className="slider sliderContainerColorMain" ref={sliderRef}>
                <div
                  className="sliderBall sliderColor1"
                  ref={sliderBallRef}
                ></div>
              </div>
            </div>
          </div>
        </header>

        <div className="resultDisplay resultTheme1" ref={resultContainerRef}>
          {input}
        </div>

        <div className="buttonsGrp buttonsGrpTheme1" ref={btnsGrpRef}>
          <button
            className="numBtn"
            value={7}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[0]}
          >
            7
          </button>
          <button
            className="numBtn"
            value={8}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[1]}
          >
            8
          </button>
          <button
            className="numBtn"
            value={9}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[2]}
          >
            9
          </button>
          <button
            className="delBtn delAndResetColor1"
            value={"DEL"}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={delAndResetBtns[0]}
          >
            DEL
          </button>

          <button
            className="numBtn"
            value={4}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[3]}
          >
            4
          </button>
          <button
            className="numBtn"
            value={5}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[4]}
          >
            5
          </button>
          <button
            className="numBtn"
            value={6}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[5]}
          >
            6
          </button>
          <button
            className="numBtn"
            value={"+"}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[6]}
          >
            +
          </button>

          <button
            className="numBtn"
            value={1}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[7]}
          >
            1
          </button>
          <button
            className="numBtn"
            value={2}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[8]}
          >
            2
          </button>
          <button
            className="numBtn"
            value={3}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[9]}
          >
            3
          </button>
          <button
            className="numBtn"
            value={"-"}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[10]}
          >
            -
          </button>

          <button
            className="numBtn"
            value={"."}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[11]}
          >
            .
          </button>
          <button
            className="numBtn"
            value={0}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[12]}
          >
            0
          </button>
          <button
            className="numBtn"
            value={"/"}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[13]}
          >
            /
          </button>
          <button
            className="numBtn"
            value={"*"}
            onClick={(e) => handleBtnClick(e.target.value)}
            ref={numBtnRefs[14]}
          >
            x
          </button>

          <button
            className="resetBtn  delAndResetColor1"
            onClick={() => setInput("")}
            ref={delAndResetBtns[1]}
          >
            RESET
          </button>
          <button
            className="equalBtn equalColor1"
            value={"="}
            onClick={handleCalculate}
            ref={equalsRef}
          >
            =
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
