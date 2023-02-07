import React,{useState} from'react'
import useList from './useList'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import style from '../Todo/Todo.module.css'


export default function Todo(props){
  const {list,push,pull}=useList()
  const [todo,setTodo]=useState("")
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }
  const onsubmitbutton=(event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")
  }
  return(
    <div className={style.body}>
        {props.name ? (
    <div className={style.border}>
      <h1 style={{color: "blue"}}>To Do List Application</h1> 
      <h3 style={{color: "blue"}}>By Aparna Dwivedi</h3> 
      <header>
        <form onSubmit={onsubmitbutton}>
          <label> <h5 style={{fontSize:"20px"}}>Add a Item</h5></label> <br/>
          <input className={style.text} type="text" value={todo} placeholder={"Enter here..."} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button className={style.button2} type='submit'>Add!!</button>
        </form>
        <h3>
          {list.map((listItem,index)=>{
            return(
            <>
              <ol style={{listStyle:'none'}} >
              <li key ={index}> {listItem}</li>
              </ol>
              <button style={{color:"white",background:"red"}} onClick={()=>{pull(index)}}>Remove</button>
              </>
            )
          })}
        </h3>
      </header>
      <button onClick={handleSignout} style={{color:"white",background:"red",padding: "5px 20px",fontSize:"16px"}}>Sign Out</button>
    </div>
    ):"Login Again"}
   </div>
  )
}