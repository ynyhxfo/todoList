import React, { Component } from 'react';
import './style.css';
import axios from 'axios';


class NewItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            status : false,
            data : "",
            priority : 1,
            category : 1,
            content : ""
            }

        this.addTodo = this.addTodo.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.changePriority = this.changePriority.bind(this);
    }
        addTodo(event) {
            console.log({
            status : this.state.status,
            date : this.state.date,
            priority : this.state.priority,
            category : this.state.category,
            content : this.state.content
          })
            let response = axios({
              method: 'POST',
              url: 'http://localhost:8000/todoItem/',
              data: JSON.stringify({
                status : this.state.status,
                date : this.state.date,
                priority : this.state.priority,
                category : this.state.category,
                content : this.state.content
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            // .then(function (response) {
            //   console.log(response)
            //   this.setState({
            //       status : false,
            //       data : "",
            //       priority : 1,
            //       category : 1,
            //       content : ""
            //   })
            // }.bind(this))
            console.log(response)
            this.setState({
              status : false,
              data : "",
              priority : 1,
              category : 1,
              content : ""
          })
            window.location.reload()
            
        }
    
  changeContent(event) {
    this.setState({
        content : event.target.value
    }
    )
  }

  changeDate(event) {
    this.setState({
        date : event.target.value
    }
    )
    console.log(event.target.value)
  }

  changePriority(event){
    this.setState({
        priority : event.target.value
    }
    )
  }

  changeStatus(event){
    this.setState({
        status : event.target.value
    }
    )
  }

  changeCategory(event){
    this.setState({
        category : event.target.value
    }
    )
  }

  render() {
    return (
      <div className="list-group" >
        <div className="content">
          content:&nbsp;<input className="form-control" type="text" placeholder="New Todo" value={this.state.content} onChange={this.changeContent}/>
        </div>
        <div className="checkbox_mark">
          finished: &nbsp;
          <input type="checkbox" onChange={this.changeStatus} checked={this.state.status}/>
        </div>
        <div className="date">
          date:&nbsp;
          <input className="form-control_mark" type="date"  value={this.state.date} onChange={this.changeDate}/>
        </div>
        <div className="priority">
          priority:&nbsp;
          <select className="form-control_mark" value={this.state.priority} onChange={this.changePriority} >
            <option value='1'>trivial</option>
            <option value='2'>mild</option>
            <option value='3'>important</option>
            <option value='4'>emergency</option>
          </select>
        </div>
        <div className="category">
          category:&nbsp;
          <select className="form-control_mark" value={this.state.category} onChange={this.changeCategory} >
            <option value='1'>regular</option>
            <option value='2'>family</option>
            <option value='3'>school</option>
            <option value='4'>office</option>
          </select>
        </div>
        <br/><br/>
        <div className="add">
          <button type="button" className="btn" onClick={this.addTodo}>Add</button>
        </div>
      </div>
      
    );
  }
}

export default NewItem