import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.todo.title}</li>
                </ul>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
