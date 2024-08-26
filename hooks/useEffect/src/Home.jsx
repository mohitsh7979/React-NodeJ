import React from 'react'

function Home(props) {
    console.log(props)
  return (
    <h1>This is my home page {props.val} </h1>
  )
}

export default Home