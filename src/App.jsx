import { useState } from "react";
import "./App.css";

function App() {
  //data making
  let arr = [];
  let n = 9;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
// variables
  const [buttonPress, setButtonPress] = useState([]);
  const [dupArr, setDupArr] = useState([]);
  const [flag, setFlag] = useState(true);
  const [timer, setTimer] = useState(null);

  //storing values in btn press array
  const handleClick = (value) => {
    setButtonPress([...buttonPress, value]);
  };

  // onclicking play btn all stored values should show one by one with yellow background:
  // setinterval method calls a function in which first element extracted from array and stored in another array named dup array when array complete last element kept in to show last clr 
 // set time out function to clear interval 
 
  const playHandle = () => {
    const l = buttonPress.length;
    console.log(l);
    setFlag(false);
    const lastIndexSet = () => {
      const p = buttonPress.length;
      if (p !== 1) {
        const toMove = buttonPress.splice(0, 1);

        dupArr.push(toMove[0]);
      } else {
        dupArr.push(buttonPress[0]);
        console.log(buttonPress, "else condition");
      }
      setDupArr([...dupArr]);
      setButtonPress([...buttonPress]);

      console.log(buttonPress, "button press");
      console.log(dupArr, "duplicate array");
    };

    const tempTimer = setInterval(lastIndexSet, 2000);
    setTimer(tempTimer);

    setTimeout(function () {
      clearInterval(tempTimer);
      setFlag(true);
    }, l * 2000);
  };

  //onclicking pause btn which is in flag with play btn flow of clr stops and on play it resumes where it stopped

  const pauseHandle = () => {
    console.log("hello", timer);

    setFlag(true);
    clearInterval(timer);
  };

  const resetHandle = () => {
    setButtonPress([]);
  };

  return (
    <div>
      {" "}
        {/* data to show */}
      <div className="flex flex-wrap w-96 pl-10">
        {arr.map((value) => {
          return (
            <div key={value} className="">
              <button
                className={
                  value ===
                  (dupArr[dupArr.length - 1] ||
                    buttonPress[buttonPress.length - 1])
                    ? "w-20 h-20 m-3 border-grey shadow-lg shadow-black-100/50 text-xl border font-bold focus:outline-none rounded-full bg-cyan-500 "
                    : "w-20 h-20 m-3 border-grey shadow-lg shadow-black-100/50 text-xl border font-bold focus:outline-none rounded-full"
                } 
                // if value equal to dup array  last element or btn press last element it should be yellow in background  
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-around mt-12  ">
        <button
          className={
            flag
              ? "bg-green-500 text-white text-xl shadow-lg shadow-black-100/50 px-8 focus:outline-none rounded-full"
              : "bg-red-500 text-white  text-xl px-8 focus:outline-none shadow-lg shadow-black-100/50 rounded-full"
          }
          onClick={flag ? playHandle : pauseHandle}
        >
          {flag ? "Play" : "Pause"}
        </button>

        <button
          className="bg-blue-500 text-white shadow-lg shadow-black-100/50 px-8 text-xl focus:outline-none rounded-full"
          onClick={resetHandle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
