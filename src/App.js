import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    items:
      [
        {
          id: 1,
          title: "wake up"
        },
        {
          id: 2,
          title: "Have Dinner"
        },
        {
          id: 3,
          title: "Die"
        },
      ],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items: updatedItems,
      id: uuidv4(),
      item: '',
      editItem: false
    }, () => console.log(this.state))
  }
  handleDelete = (id) => {
    const newItems = this.state.items.filter(
      (items) => items.id !== id)
    this.setState({
      items: newItems
    })
  }
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(
      (items) => items.id !== id)

    //find doesn't create an array but gets single item
    const selectedItem = this.state.items.find(
      (items) => items.id === id)
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }
  clearList = () => {
    // console.log("Clear List");
    this.setState({
      items: []
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">
                todo input
              </h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem} />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit} />
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default App;