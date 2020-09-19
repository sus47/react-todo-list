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
    console.log("handleChange");
  }

  handleSubmit = (e) => {
    console.log("handleSubmit");
  }
  handleDelete = (id) => {
    console.log(`handleDelete ${id}`)
  }
  handleEdit = (id) => {
    console.log(`handleEdit ${id}`)
  }
  clearList = () => {
    console.log("Clear List");
  }
  render() {
    console.log(this.state.id)
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