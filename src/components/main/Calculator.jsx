import React, { useRef, useState } from "react";
import Header from "../Header";

function Calculator() {
  const value= 0;
  const [count, setCount] = useState('');
  const [destination, setDestination] = useState('');
  const textvalue = useRef(null);
  console.log(textvalue);
  const handleClick = (value) => {
    setDestination((prevIn) => prevIn + value );
    // 👇️ value of input field
    console.log('handleClick 👉️', destination);
  };
  const handleCalculate = () => {
    try {
      setCount(eval(destination).toString());
    } catch (error) {
      setCount('Error');
    }
  };
  const handleClear = () => {
    setCount('');
    setDestination('');
  };

  return (
    <>
      <Header />
      <section
        id="counts"
        className="py-14 mt-14"
      >
        <div className="w-2/4 mx-auto text-black bg-gray-100 border border-gray-300 rounded-lg md:w-1/4">
          <div className="w-full p-3">
            <div className="h-16 ml-auto text-right overflowY-auto w-fit input">
              <h6 className="text-3xl font-bold">{destination}</h6>
              <h6 className="text-xl">{count}</h6>
            </div>
          </div>
          <div className="flex items-center w-full">
            <div className="flex flex-wrap items-center justify-center w-full py-2">
              <button onClick={handleClear} className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                AC
              </button>
              <button onClick={()=> handleClick('%')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                %
              </button>
              <button onClick={handleClear} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                cut
              </button>
              <button onClick={()=> handleClick('3')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                \
              </button>
              <button onClick={()=> handleClick('1')} className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                1
              </button>
              <button onClick={()=> handleClick('2')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                2
              </button>
              <button onClick={()=> handleClick('3')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                3
              </button>
              <button onClick={()=> handleClick('+')} className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                +
              </button>
              <button onClick={()=> handleClick('4')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                4
              </button>
              <button onClick={()=> handleClick('5')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                5
              </button>
              <button onClick={()=> handleClick('6')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                6
              </button>
              <button onClick={()=> handleClick('-')} className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                -
              </button>
              <button onClick={()=> handleClick('7')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                7
              </button>
              <button onClick={()=> handleClick('8')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                8
              </button>
              <button onClick={()=> handleClick('9')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                9
              </button>
              <button onClick={()=> handleClick('*')} className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                *
              </button>
              <button onClick={handleClear} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                C
              </button>
              <button onClick={()=> handleClick('0')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                0
              </button>
              <button onClick={()=> handleClick('.')} type="button" className="w-16 h-16 m-2 text-base font-bold text-black bg-white border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                .               
              </button>
              <button onClick={handleCalculate} className="w-16 h-16 m-2 text-base font-bold text-white bg-blue-400 border rounded-full shadow focus:shadow-xl focus:border-gray-300">
                =
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Calculator;
