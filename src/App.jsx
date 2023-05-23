/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [loadQuote, setLoadQuote] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
if (loadQuote) {
  let random = Math.floor(Math.random() * 1643 + 1)
  fetch('https://type.fit/api/quotes')
  .then(res => res.json()
  .then(dataInfo => setData(dataInfo[random]))
  .catch(error => console.error(error)))

}
return () => setLoadQuote(false);
}, [loadQuote])

const handleClick = () => {
  setLoadQuote(true);
  setData(data);
}

  return (
    <div className='Main__BG'>
      <Home
      handleClick={handleClick}
      data={data}
       />
    </div>
  )
}

export default App;
