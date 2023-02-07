import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import styles from '../SignUp/Signup.module.css'
import { Link, useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from '../../Firebase'
export default function Signup() {
 
  const [values, setValues]= useState({
    name:"",
    email:"",
    pass:"",
  })

  const [submitBtnDisabled,setSubmitBtnDisabled]=useState(false)
  const [errorMsg, setErrorMsg]=useState("")
  const navigate=useNavigate()
 const handleSubmission=()=>{
  if(!values.name || !values.email || !values.pass){
    setErrorMsg("Fill All Fields")
    return;
  }
  setErrorMsg("")
  setSubmitBtnDisabled(true)
  createUserWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
      const user=res.user;
      console.log(user)
      updateProfile(user,{
        displayName:values.name
      })
      navigate("/login")
  }).catch((err)=>{
    setSubmitBtnDisabled(false)
    setErrorMsg(err.message)
  })
  
 }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>SignUp</h1>
        <InputForm type='text' label="NAME" placeholder="Enter your name" 
        onChange={(event)=> 
        setValues((prev)=>({...prev,name:event.target.value}))
        }/>
        <InputForm type='email' label="EMAIL" placeholder="Enter your email" 
        onChange={(event)=> 
        setValues((prev)=>({...prev,email:event.target.value}))
        }/>
        <InputForm type='password' label="PASSWORD" placeholder="Enter your password" 
        onChange={(event)=>
        setValues((prev)=>({...prev,pass:event.target.value}))
        }/>
        <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitBtnDisabled}>SignUp</button>
            <p>Already have an account? {" "} 
            <span>
                <Link to="/login">Login</Link>
            </span>
            </p>
        </div>
      </div>

    </div>
  )
}