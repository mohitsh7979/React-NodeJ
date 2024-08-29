import React, { useState } from 'react'

function Color() {

    let [color,setcolor] = useState('')
   
    function mycolor(e){
        color = e.target.value  
        setcolor(color)
        console.log(color)
    }

  return (
    
    <div className="color" style={{backgroundColor:color}}>
        <h1>THis is our color component</h1>
        <input type="color" onChange={mycolor} />
        <p>Lorem ipsum dolor, {color} sit amet consectetur adipisicing elit. Neque dolorum, repudiandae beatae sit nemo modi voluptate animi sint voluptatum odio officiis dolor, minus explicabo? Necessitatibus aspernatur quis nisi vel at maiores blanditiis {color} doloremque consequuntur esse voluptatibus ea, quos ipsam culpa alias veniam rerum, a voluptatum corporis qui. Rerum explicabo nulla praesentium provident quas reprehenderit est sequi {color} molestiae voluptatum odio aspernatur, delectus non natus cupiditate quam, dolores enim optio ea? Commodi libero maiores consequuntur quos ipsa exercitationem repellendus eaque amet ad ducimus harum, quisquam dolore {color} tempora quae voluptates a beatae suscipit ut sapiente natus pariatur labore aliquam! Qui eos rem ipsa. {color} </p>
    </div>
  )
}

export default Color

