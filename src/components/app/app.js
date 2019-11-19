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
                this.createTodoItem('Отмечайте важным "!"', true),
                this.createTodoItem('Отмечайте выполненым, нажатием на задачу', false, true),
                this.createTodoItem('Напишите ниже, чтобы добавить свой план')
            ],
            term: '',
            filter: 'all'
        };
    };
    createTodoItem(label, important = false, done = false){
        return {
            label,
            important: important,
            done: done,
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

    search(items, term){
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) =>{
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    filter(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render(){

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        const visibleItem = this.filter(
            this.search(this.state.todoData, this.state.term), 
            this.state.filter);
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchBar 
                    onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter 
                        filter = {this.state.filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList todos={visibleItem}
                onDeleted={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone} />
                <AddItemForm
                onAdded={this.addItem} />
            </div>
        );
    };
};