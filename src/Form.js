import React from 'react'

function Forms(props){
    return (
        <form onSubmit={props.onFormSubmit}>
            <label>Name
                <input 
                onChange={props.onInputChange}
                value={props.formValues.name}
                name='name'
                />
            </label><br />

            <label>Email
                <input 
                onChange={props.onInputChange}
                value={props.formValues.email}
                name='email'
                />
            </label><br />

            <label>Role
                <input 
                onChange={props.onInputChange}
                value={props.formValues.role}
                name='role'
                />
            </label><br />

            <input type='submit' />
        </form>
    )
}

export default Forms;