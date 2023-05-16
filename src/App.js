import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
let DataW2=[]
function App() {
  const[Data,setData] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [FilterData, setFilterData] = useState();

  const fetchData =()=>{
  axios.get('http://localhost:5000/')
  .then(res => {
  setData(res.data) 
  DataW2=res.data
  setFilterData(res.data)
  })
  }
  useEffect(()=>{
    fetchData()
   
  },[])

  const filterDataByName = (searchTerm) => {
     const filteredData = Data.filter(item =>
       item.title.toLowerCase().includes(searchTerm.toLowerCase())
     );
         setFilterData(filteredData);
  }

  
    return (
      <>
<input name="firstName"
value={searchTerm}
 onChange={(e) =>{
  setSearchTerm(e.target.value);
   filterDataByName(e.target.value);
  }
}
 />     
  <div className='container'>
   {
   FilterData?.map((e)=>{
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