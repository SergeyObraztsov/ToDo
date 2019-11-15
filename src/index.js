import React from 'react';
import ReactDOM from 'react-dom';

const Todolist = () => {
    const items = ['learn React', 'Build Awesome App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};
const AppHeader = () => {
    return <h1>My Todo list</h1>;
};
const SearchBar = () => {
    return <input placeholder="search" />;
};
const App = () => {
    return (
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader />
            <SearchBar />
            <Todolist />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));