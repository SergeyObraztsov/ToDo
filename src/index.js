import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import TodoList from './components/todo-list/todo-list';
import SearchBar from './components/search-bar/search-bar';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

import './index.css';

const App = () => {
    
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1 },
        {label: 'Make React app', important: true, id: 2 },
        {label: 'Have a launch', important: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchBar />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));