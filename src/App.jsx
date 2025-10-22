import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center">
      <h1 className="text-5xl font-extrabold text-red-500">
        Tailwind Colors Working 🎨
      </h1>
    </div>
  );
}

export default App
