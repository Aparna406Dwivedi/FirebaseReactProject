import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Home/Home.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.text}>
      <Link to='/login'>Login</Link>
      <br /><br />
      <Link to='/Signup'>Signup</Link>
      </div>
    </div>
  )
}