import React, { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState(null);

  const handleConversion = (e) => {
    e.preventDefault();
    const usdRate = 0.027;
    const ex = amount * usdRate;
    setConverted(ex.toFixed(2));
  };

  return (
    <div className="font-noto-sans-thai mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="font-noto-sans-thai text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          USD-THB
        </h1>

        <form
          onSubmit={handleConversion}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="amount" className="block mb-2">
              THB :
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="font-medium w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="ระบุจำนวน"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="converted" className="block mb-2">
              USD :
            </label>
            <input
              type="text"
              id="converted"
              value={converted !== null ? `${converted}$` : ""}
              readOnly
              className="font-medium w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-green-700"
              placeholder=". . ."
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            แปลงค่า!
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
