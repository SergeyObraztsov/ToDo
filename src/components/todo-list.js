import React from 'react';
import TodoListItem from './todo-list-item.js';
const TodoList = () => {
    const items = ['learn React', 'Build Awesome App'];
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee" /></li>
            <li><TodoListItem 
            label="Build React App"
            important /></li>
        </ul>
    );
};

export default TodoList;