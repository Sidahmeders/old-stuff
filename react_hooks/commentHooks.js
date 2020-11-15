//? React Hooks Demo

import React, { useState } from 'react';

const appStyle = {
  textAlign: 'center',
  fontSize: "22px"
}

//! Css styles 

//* addcomment component
const AddComment = ({pushcomment}) => {
  
  const style = {
    width: "300px",
    height: "80px",
    marginTop: "10px"
  }

  const [comment, setComment] = useState("");
  const [about, setAbout] = useState("Price")


  const handleSubmit = e => {
    e.preventDefault();
    pushcomment({ab: about, com: comment })
    setComment('')
  }
  console.log(comment+" "+ about)

  return(
    <form onSubmit={handleSubmit}>
      <select value={about} onChange={e => setAbout(e.target.value)}>
        <option value="Price">Price</option>
        <option value="Availability">Availability</option>
        <option value="Else">Else</option>
      </select>
      <br></br>
      <textarea style={style} placeholder="your Question goes here.." required
                value={comment} onChange={e => setComment(e.target.value)} 
      />
      <br></br>
      <button>Send</button>
    </form>
  )
}

//* comment component
const Comment = ({item}) => {

  const style = {
    fontSize: "22px"
  }

  return(
    <div style={style}>
    <h3>{item.ab}</h3>
    <p>{item.com}</p>
    </div>
  )
}


function App() {

  const [comments, setComments] = useState([])

  const pushComment = value => {
    const newValue = [...comments, value]
    setComments(newValue)
  }

  return(
    <div className="App" style={appStyle}>
      <p>if you find our website helpfull please leave a comment
        and let us know in which area we need to improve, 
      </p>
      <AddComment pushcomment={pushComment} />
      {comments.map((item,index) => {
        return(
          <Comment key={index} item={item} />
        )
      })}
    </div>
  )
}

export default App;