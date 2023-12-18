import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#780000")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#780000" }}
          >Dark Red</button>

          <button
            onClick={() => setColor("#fca311")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#fca311" }}
          >Tangerine</button>

          <button
            onClick={() => setColor("#8ecae6")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#8ecae6" }}
          >Light Blue</button>

          <button
            onClick={() => setColor("#0d1b2a")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#0d1b2a" }}
          >Dark Blue</button>

          <button
            onClick={() => setColor("#5f0f40")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#5f0f40" }}
          >Purple</button>

          <button
            onClick={() => setColor("#38b000")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#38b000" }}
          >Green</button>

          <button
            onClick={() => setColor("#000000")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#000000" }}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App


/*
8ecae6 (light blue)
red green blue olive yellow gray white pink purple lavendar black
*/