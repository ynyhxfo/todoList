import React, {Component} from 'react';
import './style.css';
import TodoItem from './todoItem';
import axios from 'axios'


  class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            items : []
        }    
        this.getAllItem = this.getAllItem.bind(this);
        this.getAllFinished = this.getAllFinished.bind(this);
        this.getAllUnfinished = this.getAllUnfinished.bind(this);
        this.sort_by_date = this.sort_by_date.bind(this);
        this.sort_by_priority = this.sort_by_priority.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    
    getAllItem() {
        axios.get("http://localhost:8000/todoItem")
        .then(function (response) {
            this.setState(
                {
                    items:response.data
                }
            )
        }.bind(this))
    }

    getAllFinished() { 
        var finished_item = []
        this.state.items.forEach(element => {
            if (element.status === true) {
                finished_item.push(element)
            }
        });
        this.setState({
            items : finished_item
        })
    }

    getAllUnfinished() { 
        var unfinished_item = []
        this.state.items.forEach(element => {
            if (element.status === false) {
                unfinished_item.push(element)
            }
        });
        this.setState({
            items : unfinished_item
        })
    }

    sort_by_date() { 
        this.state.items.sort(function(a, b){
            if(a.date > b.date)
                return 1
            else return -1
        })
        this.setState({
            items : this.state.items
        })
    }


    sort_by_priority() { 
        this.state.items.sort(function(a, b){
            if(a.priority > b.priority)
                return 1
            else return -1
        })
        this.setState({
            items : this.state.items
        })
    }

    deleteTodo(id) {
        axios({
          method: 'DELETE',
          url: 'http://localhost:8000/todoItem/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        let todos = []
        this.state.items.forEach(todo => {
          if (todo.id !== id) {
            todos.push(todo)
          }
        });
        this.setState({
            items : todos
        })
      }
    
      componentDidMount() {
        this.getAllItem()
      }

      render() {
        return ( 
          <div>
                <ul className = "list-group_mark">
                  {
                    this.state.items.map((todo)=> (
                      <TodoItem items={todo} key={todo.id} onDelete={() => this.deleteTodo(todo.id)}/>
                    ))
                  }
                </ul>
                <div class="btn-group btn-group-lg" role="group" aria-label="...">
                  <button type="button" className="btn btn-secondary" onClick={this.getAllItem}>All</button>
                  <button type="button" className="btn btn-secondary" onClick={this.getAllFinished}>Finished</button>
                  <button type="button" className="btn btn-secondary" onClick={this.getAllUnfinished}>UnFinished</button>
                  <button type="button" className="btn btn-secondary" onClick={this.sort_by_date}>Order by Date</button>
                  <button type="button" className="btn btn-secondary" onClick={this.sort_by_priority}>Order by Priority</button>
                </div>
                {/* <div className="buttons" role="group" aria-label="Order">
                  <button type="button" className="btn btn-secondary" onClick={this.getAllItem}>All</button>
                  <button type="button" className="btn btn-secondary" onClick={this.getAllFinished}>Finished</button>
                  <button type="button" className="btn btn-secondary" onClick={this.getAllUnfinished}>UnFinished</button>
                  <button type="button" className="btn btn-secondary" onClick={this.sort_by_date}>Order by Date</button>
                  <button type="button" className="btn btn-secondary" onClick={this.sort_by_priority}>Order by Priority</button>
                </div> */}
                
          </div>
    
        
        );
      }
    }


export default TodoList;