import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {

	const [state, updateState] = useState({
		email: '',
		password: '',
		filled: false,
		error: false,
		errorMessage: ''
	});

	const handleChange = (e) => {
		const { email, password } = state;
		// Logic to check whether both inputs have been filled. Sets the state to true/false and enables/disables button for form.
		if(!e.currentTarget.value) {
			updateState(prevState => ({
				...prevState,
				filled: false
			}))
		} else if(email && password) {
			updateState(prevState => ({
				...prevState,
				filled: true
			}))
		} 
		// Set state based on incoming values from inputs
		const { name, value } = e.currentTarget;
		updateState(prevState => ({
			...prevState,
			[name]: value
		}))
	}
	// Submit function for form
	const handleSubmit = (e) => {
		// Print state to console on submit and reset error state
		e.preventDefault();
		updateState(prevState => ({
			...prevState,
			errorMessage: '',
			error: false
		}))
		console.log('submitted')
		console.log('Current State:', state)
		// Simulate a bad credentials API call and display error message
		Promise.reject('Bad credentials.').then(
			updateState(prevState => ({
				...prevState,
				errorMessage: 'You entered and incorrect email, password, or both.',
				error: true
			}))
		)
	}

	return (
		<div className='login'>
				<h2>Welcome back!</h2>
				<p className='welcome-text'>Sign in and get to it.</p>
				<form className='submit-form' onSubmit={(e) => handleSubmit(e)}>
					<label htmlFor='email' className='form-input'>
						Email
						<input 
							name='email' 
							onChange={(e) => handleChange(e)} 
							className={state.error ? 'input-error' : ''} 
							type='email' 
							placeholder='Email' 
							required
						/>
					</label>
					<label htmlFor='password' className='form-input'>
						Password
						<input 
							name='password' 
							onChange={(e) => handleChange(e)} 
							className={state.error ? 'input-error' : ''} 
							type='password' 
							placeholder='Password' 
							required
						/>
					</label>
					<p className='forgot'>Forgot your password?</p>
					<p className='error-message'>{state.errorMessage}</p>
					<div className='button-container'>
						<button disabled={!state.filled} type='submit' className='signin-button'>Sign In</button>
					</div>
				</form>
				<a href='/' className='new-account'>Don't have an account? Create one now!</a>
		</div>
	)
}

export default LoginForm;