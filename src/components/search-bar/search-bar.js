import React from 'react';
import './search-bar.css';

export default class SearchBar extends React.Component {
    
    constructor(){
        super();
        this.state = {
            term: ''
        };
    };
    
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render(){
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Type here to search" 
                value={this.state.term} 
                onChange={this.onSearchChange} />
        );
    }
};
