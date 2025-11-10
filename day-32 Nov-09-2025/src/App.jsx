import { useEffect, useRef, useState } from 'react'
import MyComponents from './components/MyComponents'

function App() {
  let [num, setNum] = useState(0);
  useEffect(() =>{
    console.log("App paghe has been loaded");
  }, [num]);
  const n = useRef(0);
  const handleIncrement = () => {
    n.current = n.current + 1
    alert(n.current);
  }

  return (
    <>
      <MyComponents great="Hello" person="Alif" />
      <MyComponents great="Hello" person="Turza" />
      <div>{num}</div>
      <div>{n.current}</div>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
