import React from 'react'

export default function Profile(props) {
  return (
    <div>
        <h1>Hello {props.name? (<div>
          <h1>{props.name}</h1>
        </div>):"Please Login"}</h1>
    </div>
  )
}