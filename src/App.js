import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './components/Pagination';

const App = () => {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res => {setData(res.data);setPerpage(res.data.slice(0,10))}
    )
  },[]) 

  const pageHandler = (pageNumber) =>{
       setPerpage(data.slice((pageNumber*10)-10, pageNumber*10))
  }

  return (
    <div className="App">
      <h2>Pagination Concept Using React Js</h2>
       {
         data.length>=1?
         <div>
           {
             perpage.map((post)=> <div className='post'>{post.title}</div>)
           }
           <br />
           <Pagination data={data} pageHandler={pageHandler}/>
         </div>:
         <p>Data Not Loaded</p>
       }
    </div>
  );
}

export default App;
