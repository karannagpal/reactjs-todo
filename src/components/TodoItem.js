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
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } />
                    { title }
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
