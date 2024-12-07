import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="absolute bottom-12 inset-x-0 flex flex-wrap justify-center px-2">
          <div className="flex flex-wrap shadow-lg gap-3 bg-white rounded-full px-2 py-3 font-bold">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text white shadow-lg "
              style={{ backgroundColor: "red" }}>
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text white shadow-lg "
              style={{ backgroundColor: "green" }}>
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text white shadow-lg "
              style={{ backgroundColor: "blue" }}>
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
