import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import data from "./components/data.json";
import Header from './components/Header';
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList123";


function App() {
  const [ toDoList, setToDoList ] = useState(data)

  const handleToggle = (id) => {
    console.log("handleToggle Called");
    let mapped = toDoList.map(task => {
      return task.id == id ? {...task,complete: !task.complete} : {...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    console.log("handleFilter Called");
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    console.log("addTask called");
    let copy = [...toDoList];
    copy = [...copy,{id:toDoList.length +1,task:userInput, complete:false}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
