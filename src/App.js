import React from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends React.Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: 'Take out trash',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Dinner with wife',
                completed: false
            },
            {
                id: uuid.v4(),
                title: 'Meeting with boss',
                completed: false
            }
        ]
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
        this.setState({
            // basically returning all todos whose ids don't match
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
            // triple dot id spread operator
        })
    }

    // add todo
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        }
        if (title) {
            this.setState({ todos: [...this.state.todos, newTodo] })
        }

    }


    render() {
        return (
            <div className="App">
                <Header></Header>
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
            </div>
        );
    }
}

export default App;
