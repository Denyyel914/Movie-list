import React, { useState } from 'react'
import Heading from './Heading';
import Input from './Input';
import List from './List';
import Generator from './Generator';
import './App.css'

const App = () => {
  const [collection,setCollection] = useState([])

  const addItem = (inputText,e) => {
    if(collection === "") {
      alertShow("Show Added", "alert alert-success")
    } else {
      setCollection(prev => {
        return [
          ...prev,
          inputText
        ]
      })
      // console.log(collection)
      alertShow("Show Added", "alert alert-success")
    }
  }

  const deleteItem = (id) => {
    setCollection(prev => {
       return prev.filter((element,index) => {
        return id !== index;
      })
    })
    alertShow("Show  Deleted", "alert alert-warning")
  }

  const onRandom = () => {
    // for (var j = 0; j < items.length; j++) {
    //   kahon.push(items[j].textContent.substr(0, items[j].textContent.length -1));
    //   }
    // const zzz = Math.floor(Math.random() * collection.length);
    //  console.log(zzz);
    const resultss = document.querySelector('#generator-result');
    const newArray = collection[Math.floor(Math.random() * collection.length)]
    resultss.innerHTML = newArray
  }

  const alertShow = (message,className) => {
    const div = document.createElement('div');
    div.className = className; 
    div.appendChild(document.createTextNode(message));
    const header = document.querySelector('#header');
    const container2 = document.querySelector('#container');
    container2.insertBefore(div, header);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  return <div>
    <Heading />
    <Input onAdd={addItem} alert={alertShow}/>
    <div class="container" id="container">
      <h1 class="text-center text-transform-uppercase font-weight-bold" id="header">List Of Movies and Series</h1>
      <p class="text-center font-weight-bold">Click the "X" to remove the item list</p>
        <div id="main" class="card card-body">
          <h1 class="title text-center">Movies And series list</h1>
          {collection.map((element,index) => {
            return <List item={element} key={index} id={index} onDelete={deleteItem}/>
          })}
        </div>
    </div>
    <Generator generate={onRandom} />
  </div>
}
export default App;
