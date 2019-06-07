import React from 'react';

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>
                This is TodoList app v1.2.0, it is a part of react crash course made by <b>Traversy Media</b>
            </p>
            <h2>Changelog:</h2>
            <dl>
                <dt>v0.9.0</dt>
                <dd>The initial Todo version. includes functionalities of adding and removing tasks, clicking on checkbox changes some styles, uuid oackage used for generating random keys</dd>

                <dt>v1.0.0</dt>
                <dd>Fully function Todo list maker with Home and about page</dd>

                <dt>v1.1.0</dt>
                <dd>initial Todos fetched using Axios (http library for React) and, 'uuid' is now removed</dd>

                <dt>v1.2.0</dt>
                <dd>Includes better UI, using bootstrap 4</dd>
            </dl>
        </React.Fragment>
    )
}

export default About