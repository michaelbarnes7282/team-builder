import React, { useState } from 'react';
import './App.css';
import Forms from './Form';
import { v4 as uuid } from 'uuid'

const initialMembers = [
  { id: uuid(), name: 'Michael', email: 'michaelbarnes7282@gmail.com', role: 'Software Engineer'}
]

function App() {
  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState({
    name: '',
    email:'',
    role: '',
  })

  const onInputChange = event => {
    const changedInput = event.target.name

    const newVal = event.target.value

    setFormValues({
      ...formValues,
      [changedInput]: newVal,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault()

    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <Forms 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
        />

        <h2>List of Members</h2>
        {
          members.map (mem => 
          <div key ={mem.id}>
            <h3>{mem.name}</h3>
            <h4>{mem.role}</h4>
            <p>{mem.email}</p>
            </div>)
        }
      </div>
  );
}

export default App;
