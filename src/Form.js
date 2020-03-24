import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Forms(props){
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
        props.setMembers([...props.members, newMember])
      }

    return (
        <form onSubmit={onFormSubmit}>
            <label>Name
                <input 
                onChange={onInputChange}
                value={formValues.name}
                name='name'
                />
            </label><br />

            <label>Role
                <input 
                onChange={onInputChange}
                value={formValues.role}
                name='role'
                />
            </label><br />

            <label>Email
                <input 
                onChange={onInputChange}
                value={formValues.email}
                name='email'
                />
            </label><br />

            <input type='submit' />
        </form>
    )
}

export default Forms;