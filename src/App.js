import React from 'react';
import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './component/TodoList';
import TodoInput from './component/TodoInput';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
