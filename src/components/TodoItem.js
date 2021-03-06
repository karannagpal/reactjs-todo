import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: this.props.todo.completed ? '#9f9' : '#f99',
            padding: '5px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };


    // what to render
    render() {

        // structuring, so that we don't need to use 'this.props.todo' everytime
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()} className="mb-1 p-2">
                <p>
                    <input type="checkbox" className="form-check-inline" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button className="btn btn-danger" style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


// might wanna add font-awesome here
const btnStyle = {
    float: 'right'
}

export default TodoItem;
