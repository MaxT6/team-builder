import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
}



function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");

  const updateForm = (inputName, inputValue )

  useEffect(() => {
   
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
