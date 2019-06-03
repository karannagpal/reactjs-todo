import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />
        });
    }
}

// creating a wireframe for props, 
// what all props are compulsary
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
