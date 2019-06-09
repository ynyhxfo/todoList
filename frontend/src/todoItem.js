import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

class TodoItem extends Component{
    changeStatus() {
        this.setState({
            temp_status : this.state.temp_status === true ? false : true
        })
    }

    deleteItem(event){
        this.props.onDelete()
    }
    
    changeContent(event) {
        let cur = this.state.temp_content;
        cur = event.target.value;
        this.setState({temp_content:cur})
        // this.state.temp_content = cur;
        // this.updateTodoItem();
    }

    changeDate(event) {
        let cur = this.temp_date;
        cur = event.target.value;
        this.setState({temp_date:cur})
        // this.state.temp_date = cur;
        //this.updateTodoItem();
    }

    changePriority(event) {
        let cur = this.temp_priority;
        cur = event.target.value;
        this.setState({temp_priority:cur})
        // this.state.temp_priority = cur;
        //this.updateTodoItem();
    }

    changeCategory(event) {
        let cur = this.temp_category;
        cur = event.target.value;
        this.setState({temp_category:cur})
        // this.state.temp_category = cur;
        //this.updateTodoItem();
    }

    updateTodoItem() {
        // this.setState({
        //     status:this.temp_status,
        //     data:this.state.date,
        //     priority:this.state.priority,
        //     category:this.state.category,
        //     content:this.state.content
        // })
        this.state.status = this.state.temp_status;
        this.state.date = this.state.temp_date;
        this.state.priority = this.state.temp_priority;
        this.state.category = this.state.temp_category;
        this.state.content = this.state.temp_content;
        axios({
            method: 'PATCH',
            url: 'http://localhost:8000/todoItem/' + this.state.id + '/',
            data: JSON.stringify({
                content: this.state.content,
                date: this.state.date,
                priority: this.state.priority,
                status: this.state.status,
                category: this.state.categorye
              }),
              headers:{
                'Content-Type': 'application/json'
              }
            })
    }


    constructor(props){
        super(props)
        this.state={
            id : this.props.items.id,
            status : this.props.items.status,
            date : this.props.items.date,
            priority : this.props.items.priority,
            category : this.props.items.category,
            content : this.props.items.content,
            date_create : this.props.items.date_create,
            temp_content : this.props.items.content,
            temp_date: this.props.items.date,
            temp_priority: this.props.items.priority,
            temp_category: this.props.items.category,
            temp_status: this.props.items.status
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changePriority = this.changePriority.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateTodoItem = this.updateTodoItem.bind(this);
    }
    
    
    render() {
        return (
            <div className = 'oneItem'>
                <div className="content">
                    content: &nbsp;<input className="form-control" defaultValue={this.state.temp_content} onChange={this.changeContent}/>
                </div>
                <div className="checkbox_mark">
                    finished: &nbsp;<input type="checkbox" onChange={this.changeStatus} checked={this.state.temp_status}/>
                </div>
                <div className="date">
                    date: &nbsp;<input className="form-control_mark" defaultValue={this.state.temp_date} type="date" onChange={this.changeDate}/>
                </div>
                <div className="priority">
                    priority: &nbsp;
                    <select className="form-control_mark" defaultValue={this.state.temp_priority} onChange={this.changePriority}>
                        <option value="1">trivial</option>
                        <option value="2">mild</option>
                        <option value="3">important</option>
                        <option value="4">emergency</option>
                    </select>
                </div>
                <div className="category">
                    category: &nbsp;
                    <select className="form-control_mark" defaultValue={this.state.category} onChange={this.changeCategory}>
                        <option value="1">regular</option>
                        <option value="2">family</option>
                        <option value="3">school</option>
                        <option value="4">office</option>
                    </select>
                </div>
                <br/><br/>
                <div className="con_and_del">
                    <button type="button" className="btn" onClick={this.updateTodoItem}>confirm</button>
                    &nbsp;&nbsp;
                    <button type="button" className="btn" onClick={this.deleteItem}>delete</button>
                </div>
            </div>
        )
    }

}


export default TodoItem;