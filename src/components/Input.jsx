import React, { useState } from 'react';

const Input = (props) => {
    const [inputText,setInputText] = useState("");
    const handleChange = (e) => {
        const {value} = e.target;
        setInputText(value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }
    
    return <div class="container">
    <h2 class="">Add show</h2>
    <form id="addForm" class="form-inline mb-3" onSubmit={handleSubmit} >
      <input onChange={handleChange} type="text" class="form-control mr-2" id="item" placeholder="Input Show/Movies"/>
      <button onClick={() => {
           props.onAdd(inputText)
      }} className="btn btn-dark">Submit</button>
    </form>
  </div>
}

export default Input;