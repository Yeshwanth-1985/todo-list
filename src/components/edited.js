import './App.css';
import Header from './components/header.js';
import Todos from './components/todos.js';
import Footer from './components/footer.js';
import Addtodo from './components/addtodo.js';
import React, {useState, useEffect} from 'react';
import About from './components/about.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
let inittodo = localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"))
const [temptodos, settemptodos] = useState(inittodo);  

  const searchtodo = (searchkey) => {
    if(searchkey) {
    console.log(todos.filter(item => item.work.toLowerCase().includes(searchkey.toLowerCase())));
    settemptodos(() => todos.filter(item => item.work.toLowerCase().includes(searchkey.toLowerCase())));
    }
    else {
      settemptodos(todos);
    }
  }
  const onDelete = (todo) => {
    let templist = todos.filter((e) => {
      return e!==todo;
    });
    setTodos(templist);
    settemptodos(templist);
    localStorage.setItem("todos", JSON.stringify(todos));
  
  }
  const addtodo = (title,desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length-1].sno + 1;
    const mytodo = {
      sno: sno,
      work: title,
      desc: desc
    };
    setTodos([...todos, mytodo]);
    settemptodos(todos);
  }
  const [todos, setTodos] = useState(inittodo);
    useEffect(() => {
       localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <>
    <Router>
   <Header searchtodo={searchtodo} search={true} title="My Todo List"/>
    <Switch>
          <Route exact path="/">
           <>
              <Addtodo addtolist={addtodo}/>
             <Todos list={temptodos} onDelete={onDelete}/> 
              </>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
  <Footer />
  </Router>
  </>
  );
 }


export default App;
