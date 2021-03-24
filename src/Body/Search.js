import React, { useState } from 'react';
import {FormControl, Form, Button} from 'react-bootstrap';

const Search = ({ searchArticles }) => {
    const [text, setText] = useState('');
    
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        searchArticles(text);
    };
    return (
        <div>
        <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" 
      value={text} onChange={handleChange}/>
      <Button variant="outline-primary">Search</Button>
    </Form>
        </div>
    );
};

export default Search;