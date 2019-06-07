import React from 'react';
import { Link } from 'react-router-dom'

// incase of function components, there's only one return, no render
function Header() {
    return (
        <header style={headerStyle} className="p-4 mb-1">
            <h1 className="display-3">ToDo list</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;