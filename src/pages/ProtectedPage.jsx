import React from "react"

const ProtectedPage = ({ x }) => {
    
  return (
    <div>
      <h1>You are logged in. Welcome to protected page! Value of x is {x}</h1>
    </div>
  )
}

export default ProtectedPage
