import React from 'react';
import Basic from './Components/AddDetails'
import './App.css';
import Todo from './Components/Todo'
import Select, { Option } from '@material/react-select';
import Filter from './Components/Filter'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{
        id: 0, todo: "buy milk", isFinished: false
      },
      {
        id: 1, todo: "Go to school", isFinished: false
      },
      {
        id: 2, todo: "finish homework", isFinished: false
      },
      {
        id: 3, todo: "get back to home", isFinished: false
      }],
      newTodoCurrentValue: "",
      value : "Completed"
      
    };
  }
  handleDelete = (id) => {
    const todo = this.state.todo.filter(item => {
      return item.id !== id
    })
    this.setState({
      todo: todo
    })
    console.log("delete is clicked", id);
  }
  addtodo = (e) => {

    let newTodo = {}
    newTodo.todo = (this.state.newTodoCurrentValue)
    newTodo.id = Math.random()
    newTodo.isFinished = false;
    let mynewtodo = [...this.state.todo, newTodo]
    this.setState({
      todo: mynewtodo
    })
  }
  handleDone = (id) => {
    let done = this.state.todo.findIndex(x => x.id === id)
    this.state.todo[done].isFinished = true;
    this.setState({
      todo: this.state.todo
    })
  }
  handleChange = (e) => {
    this.setState({ newTodoCurrentValue: e.target.value })
  }

  handleFilter = ()=>{
    console.log("filter is clicked")
  }
  render() {
    return (
      <div className="App">

        <h1>Welcome to TODO APP</h1>
        <Select
          label='Task Type'
          value={this.state.value}
          onChange={(evt) => {
            this.setState({ value: evt.target.value }
            )
          }
        }
        >
          <Option value='Completed'>Completed</Option>
          <Option value='yetToComplete'>yet To Complete</Option>
          <Option value=''>Show All</Option>
          
        </Select>
        <div>

          <input type="text" name="addtodo" value={this.state.newTodoCurrentValue} onChange={this.handleChange}></input>
          <button type="submit" onClick={this.addtodo}>ADD NEW TODO</button>
        </div>
        <Todo todo={this.state.todo} deleteToDo={this.handleDelete} done={this.handleDone} filter={this.state.value} />
        <Basic />
      </div>
    );
  }
}

export default App;
