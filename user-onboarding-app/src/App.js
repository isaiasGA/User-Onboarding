import React, { useState, useEffect } from 'react';
import './App.css';
import * as yup from 'yup';
import axios from 'axios';

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
                  //8: Statate for displaying form submission as JSX
  const [postForm, setPostForm] = useState([]);
     
    //5: SUBMIT BUTTON toggle validation functionality
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
     //We are targetting the values of each input inside '.validate'
    .validate(event.target.value)
    .then(valid => {
        //'valid' tracks down every value that the user types in in an input
      console.log('valid',valid)
      setErrors({
         //this empty string "" will fill up with the values that we type, check console
        ...errors, [event.target.name] :""
      });
      console.log('validate', errors);
    })
    .catch(error => {
      setErrors({
        ...errors, [event.target.name] : error.errors[0]
      });
    });
  };

          //7: Grab the values from each input
  const inputChange = event => {
    event.persist();
    const inputValues = {
      ...mainState, [event.target.name] : event.target.type === 'checkbox' ? event.target.checked : event.target.value
    };    // invoke the function that allows us to validate every value of each input that we have selected
    validateInputs(event);
    setMainState(inputValues);
  }
 
     //8: Submit functionality
   const formSubmit = event => {
     event.preventDefault();
      axios
      .post("https://reqres.in/api/users", mainState)
      .then(response => {
        console.log(response)
          //display info as JSX
        setPostForm(response.data);
        console.log('for submitted', postForm);
          //Reseting inputs once form has been submitted
        setMainState({
          name: '',
          email: '',
          password: '',
          terms: '',
        });
      })
      .catch(error => {
        console.log(error.response)
      });
   };   

    return (
    <div className="App">
      <h1>{'User List 📃'}</h1>
      <Form 
        value = {mainState}
        buttonDisabled = {buttonDisabled}
        input = {inputChange}
        submit = {formSubmit}
        errors ={errors}
        post = {postForm}
        />
    </div>
  );
}

export default App;
