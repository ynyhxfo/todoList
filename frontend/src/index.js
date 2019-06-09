import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import NewItem from './newItem';
import TodoList from './todoList';


var destination = document.querySelector('#allList')

ReactDom.render(
    <div>
        <h1>Add new</h1>
        <NewItem/>
        <h1>todoList</h1>
        <TodoList/>
    </div> ,
    destination
);