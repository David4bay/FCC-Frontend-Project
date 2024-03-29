import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';

function App() {
  const [loadQuote, setLoadQuote] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
if (loadQuote) {
  fetch('https://type.fit/api/quotes')
  .then(res => res.json()).then(dataInfo => {
    let random = Math.floor(Math.random() * 15 + 1)
    return setData(dataInfo[random])
  })
  .catch(error => console.error(error))
}
setLoadQuote(false);
}, [loadQuote])

const handleClick = () => {
  setLoadQuote(true);
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
