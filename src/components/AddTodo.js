import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        // now, clearing up that input field
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} className="mb-1 form-inline">
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add a ToDo..."
                    value={this.state.title}
                    onChange={this.onChange}
                    className="col-md-10 pr-1 form-control"
                ></input>

                <input type="submit" value="submit" className="col-md-2 btn btn-info m-1 form-control" style={{ flex: '1' }} ></input>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
