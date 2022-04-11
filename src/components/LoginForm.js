import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
	return (
		<div className='login'>
				<h2>Welcome back!</h2>
				<p className='welcome-text'>Sign in and get to it.</p>
				<form className='submit-form'>
					<label for='email' className='form-input'>
						Email
						<input className='input-hover' type='email' placeholder='Email'/>
					</label>
					<label for='password' className='form-input'>
						Password
						<input className='input-hover' type='password' placeholder='Password'/>
					</label>
					<p className='forgot'>Forgot your password?</p>
					<div className='button-container'>
						<button className='signin-button'>Sign In</button>
					</div>
				</form>
				<a href='/' className='new-account'>Don't have an account? Create one now!</a>
		</div>
	)
}

export default LoginForm;