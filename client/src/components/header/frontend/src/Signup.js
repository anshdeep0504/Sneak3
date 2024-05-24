import React, { useState } from 'react';
// import { useHistory } from 'react-router';
 // Import useHistory
 import {Link, useNavigate} from 'react-router-dom'
import validation from './SignupValidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const history = useNavigate(); // Use useHistory
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.name === "" && errors.email === "" && errors.password === "") {
        axios.post('http://localhost:8081/signup', values)
        .then(res => {
            history.push('/'); // Navigate using history.push
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName'><strong>First Name</strong></label>
            <input type='text' id='firstName' placeholder='First Name' name='name' className='form-control rounded-0' onChange={handleInput} />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' id='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0' />
            {/* No validation error for email field */}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' id='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100'>Sign up</button>
          <p>You agree to our terms and conditions</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
