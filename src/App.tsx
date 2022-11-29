import React, { createElement as e } from 'react';

function App() {
    // return (
    //     <div>Hello World!!!!</div>
    // );

    // return React.createElement('h1', {}, 'Hello Element!!!');
    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold'}, 'Test JSX'),
        e('button', {className: ''}, 'Click me!')
    ]);
}

export default App;
