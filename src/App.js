import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';


class App extends React.Component {
    state = {
        todos: []
    }

    // runs as soon as the component mounts onto DOM
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
            .then(res => this.setState({ todos: res.data }))
    }

    // toggle complete
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    // deleting that todo
    delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
            // basically returning all todos whose ids don't match
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
            // triple dot id spread operator
        }));
    }

    // add todo
    addTodo = (title) => {
        // this wont alter the server's data but would still send a signal when promise is resolved
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: title,
            completed: false
        }).then(res => {
            this.setState({ todos: [...this.state.todos, res.data] })
        })
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <Header></Header>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}></AddTodo>
                            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
                        </React.Fragment>
                    )}></Route>

                    <Route path="/about" component={About}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
