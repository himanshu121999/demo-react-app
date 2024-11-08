import React from 'react'
import axios from 'axios'



const App = () => {

  const fetchData = async ()=>{
    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then((res)=>{
    //   console.log(res.data)
    // }).catch((err)=>{
    //   console.log("something went wrong")
    //   console.log(err)
    // })

    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log(res)
    }catch(err){
      
    }
   

  }


  return (
    <div>
      <button onClick={fetchData} className='border btn bg-slate-50'>get data from server</button>
    </div>
  )
}

export default App