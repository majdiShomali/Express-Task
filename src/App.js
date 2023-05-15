import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const[Data,setData] = useState(null)
  const fetchData =()=>{
  axios.get('http://localhost:5000/')
  .then(res => {
  setData(res.data) 
  })
  }
  useEffect(()=>{
    fetchData()
  },[])

  const filterDataByName = (searchTerm) => {
    const filteredResults = Data.filter(item => item.title.includes(searchTerm));
    setData(filteredResults);
  }
 
    return (
      <>
<input name="firstName"
 onChange={(e) => filterDataByName(e.target.value)}
 />     
  <div className='container'>
   {
   Data?.map((e)=>{
    return(
    <div className='card'>
      <p>{e.title}</p>
      <img src={e.thumbnail}></img>
      <p>{e.description}</p>

    </div>

    )
      
        })
   }

   </div>
      </>
     )




 

 
}
export default App;