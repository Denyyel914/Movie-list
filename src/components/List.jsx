import React from 'react';

const List = (props) => {
    return <ul id="items" class="list-group">
       <li className="list-group-item">{props.item}<button onClick={() => {
         props.onDelete(props.id)
       }} className="btn btn-danger btn-sm float-right delete">X</button></li> 
    </ul>
}

export default List