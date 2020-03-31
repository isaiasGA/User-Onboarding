import React, { useState } from 'react';

function Form(props){
  return(
      <form>
       <label htmlFor = 'name'>
           {'😎 Name'}
         <input
           id = 'name'
           type = 'text'
           name = 'name'
           placeholder = 'Name'
           autoComplete = 'off'
           value = {props.value}
        //    onChange = {}
         />   
       </label>
       <label htmlFor = 'email'>
           {'📧 Email'}
         <input
           id = 'email'
           type = 'email'
           name = 'email'
           placeholder = 'Email'
           autoComplete = 'off'
           value = {props.value}
        //    onChange = {}
         />   
       </label>
       <label htmlFor = 'Password'>
           {'🔑 Password'}
         <input
           id = 'password'
           type = 'password'
           name = 'password'
           placeholder = 'Password'
           autoComplete = 'off'
           value = {props.value}
        //    onChange = {}
         />   
       </label>
       <label htmlFor = 'checkbox'>
       {"🧐🧾Terms and Conditions"}
         <input
           type = 'checkbox'
           name = 'terms'
           value = {props.value}
        //    onChange = {}
         />   
       </label>
       <button disabled={props.buttonDisabled}>{'📩Submit'}</button>
      </form>
  )
};

export default Form;