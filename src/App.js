import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/main';

function App() {

  const [data, setData] = useState([])
  const [shouldFetch, setShouldFetch] = useState(false)

  const fetchData = async () => {
    const result = await fetch('http://localhost:3000/get/data');
    const res = await result.json()

    setData(res)
  }

  const pushNewData = async (textForPush) => {
    const result = await fetch('http://localhost:3000/get/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: textForPush }) 
    });
    const res = await result.json()

    setData(res)
    setShouldFetch(true)
  }

  useEffect( () => {
    fetchData()
  }, [])

  useEffect( () => {
    if(shouldFetch) {
      fetchData()
      setShouldFetch(false)
    }
  }, [shouldFetch])

  return (
    <div className="wrapper">
        <Main data={data} pushNewData={pushNewData}/>
    </div>
  );
}

export default App;
