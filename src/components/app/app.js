import React from 'react';

import AppHeader from '../app-header/app-header';
import TodoList from '../todo-list/todo-list';
import SearchBar from '../search-bar/search-bar';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import AddItemForm from '../add-item-form/add-item-form';

import './app.css';

export default class App extends React.Component {
    
    maxId = 100; 

    constructor(){
        super();
        this.state={
            todoData: [
                this.createTodoItem('Drink coffee'),
                this.createTodoItem('Make React app'),
                this.createTodoItem('Have a lunch')
            ]
        };
    };
    createTodoItem(label){
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
    
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData.slice(0, idx), 
                            ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };

        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            };
        });
    };
    togglePropertry(arr, id, propName){
        const idx = arr.findIndex((el) => el.id === id);

            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            return [...arr.slice(0, idx),
                    newItem, 
                    ...arr.slice(idx + 1)];
    };
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropertry(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.togglePropertry(todoData, id, 'done')
            };
        });
    };

    render(){

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchBar />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone} />
                <AddItemForm
                onAdded={this.addItem} />
            </div>
        );
    };
};