import React, { useState, useEffect } from 'react';
import './App.css';
import * as yup from 'yup';

import Form from './components/Form';
              
                //1: validation criteria
const formValidation = yup.object().shape({
  name: yup.string().required('Name is a required field 🙄'),
  email: yup.string().required('Must type an email account 😁'),
  password: yup.string().required('please type a password 🧐'),
  terms: yup.boolean().oneOf([true]).required('please agree to terms and conditions 🙄'),
})

function App() {
            //2: form state
  const [mainState, setMainState] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
});             //3: state for errors criteria
  const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
  });                   //4:State for submit button validation
  const [buttonDisabled, setButtonDisabled] = useState(true);
     
    //5: button validation functionality
useEffect(() => {
  formValidation.isValid(mainState).then(valid => {
    console.log('Is our form valid?', valid);
    setButtonDisabled(!valid);
    console.log('button disabled', buttonDisabled)

  });
}, [mainState]);

        //6: Validate every input in our form according to the criteria in our Yup val
  const validateInputs = event => {
    yup   //We are targetting the name and value of each input as well as targetting the 'formValidation' which contains each criteria
    .reach(formValidation,event.target.name)
    .validate(event.target.value)
    .then(valid => {
      console.log('valid',valid)
      setErrors({
        ...errors, [event.target.name] :""
      });
      console.log('validate', errors);
    })
  }

  // const inputChange = event => {
  //   event.persist();
  //   const inputTracker = {
  //     ...mainState, [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
  //   };

  // }
  return (
    <div className="App">
      <h1>{'User List 📃'}</h1>
      <Form 
        value = {mainState.name}
        buttonDisabled = {buttonDisabled}
        />
    </div>
  );
}

export default App;
