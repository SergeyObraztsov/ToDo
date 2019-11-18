import React from 'react';
import './add-item-form.css';

export default class AddItemForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            label: ''
        };
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onAdded(this.state.label);
        }
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-item-form d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text"
                        placeholder="Type your task here"
                        className="form-control"
                        onChange={this.onLabelChange}
                        value={this.state.label} />
                <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={this.onSubmit}>Add task</button>
            </form>
        );
    };
};