import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import SocialCard from "./components/SocialCard.js";
function App() {
  const [users,setUsers] = useState([])
  useEffect (()=>
  {
  (async () => {
     let userData;
     try{
       const response = await fetch('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d/');
       const userData = (await response.json()).data
     }catch(error){
       console.log(error)
       userData = []
     }
     setUsers(userData);
  })()
  },[])
  return (
    <div className="App">
      {users.map((users,index => {
        <SocialCard userData = {users} key ={index}  />
      }))}
    </div>
  );
}

export default App;
