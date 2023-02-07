
import { useEffect,useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import Todo from './Todo/Todo';

function App() {
  const [username,setUserName] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.email.substr(0,user.email.indexOf("@")))
      }
      else {
        setUserName("")
      }
    })
  },[])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo name={username}/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;