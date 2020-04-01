import React, { useState } from 'react';

function Form(props){
  return(
      <form onSubmit={props.submit}>
       <label htmlFor = 'name'>
           {'😎 Name'}
         <input
           id = 'name'
           type = 'text'
           name = 'name'
           placeholder = 'Name'
           autoComplete = 'off'
           value = {props.value.name}
           onChange = {props.input}
         />{props.errors.name.length > 0 ? <p className='error'>{props.errors.name}</p> : null}   
       </label>
       <label htmlFor = 'email'>
           {'📧 Email'}
         <input
           id = 'email'
           type = 'email'
           name = 'email'
           placeholder = 'Email'
           autoComplete = 'off'
           value = {props.value.email}
           onChange = {props.input}         
           /> {props.errors.email.length > 0 ? <p className='error'>{props.errors.email}</p> : null}   
       </label>
       <label htmlFor = 'Password'>
           {'🔑 Password'}
         <input
           id = 'password'
           type = 'password'
           name = 'password'
           placeholder = 'Password'
           autoComplete = 'off'
           value = {props.value.password}
           onChange = {props.input}
          /> {props.errors.password.length > 0 ? <p className='error'>{props.errors.password}</p> : null}  
       </label>
       <label htmlFor = 'checkbox'>
       {"🧐🧾Terms and Conditions"}
         <input
           type = 'checkbox'
           name = 'terms'
           value = {props.value.checkbox}
           onChange = {props.input}
         />   
       </label>
       <pre>{JSON.stringify(props.post, null, 2)}</pre>
       <button disabled={props.buttonDisabled}>{'📩Submit'}</button>
      </form>
  )
};

export default Form;