import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form';
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

  const updateForm = (inputName, inputValue ) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newTeamMember = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeamMember.email) {
      setFormError("Error");
      setFormValues(initialFormValues);
      return;
    } 
    axios.post("fakeapi.com", newTeamMember)
    .then(res => {
      console.log(res.data);
      setTeamMembers([ res.data, ...teamMembers ]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  
  }
  
  useEffect(() => {
   axios.get('fakeapi.com').then(res => setTeamMembers(res.data))

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Join Our Team Today!
        </p>
        {/* { formError && <p className="error">{formError}</p> } */}
        <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
