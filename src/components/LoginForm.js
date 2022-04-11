import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
	return (
		<div className='login'>
			<form className='submit-form'>
				<h2>Welcome back!</h2>
				<p className='welcome-text'>Sign in and get to it.</p>
				<div className='form-elements'>
					<label for='email'>Email</label>
					<input type='email' placeholder='Email'/>
					<label for='password'>Password</label>
					<input type='password' placeholder='Password'/>
				</div>
				<p className='forgot'>Forgot your password?</p>
				<div className='button-container'>
					<button className='signin-button'>Sign In</button>
				</div>
				<a href='/' className='new-account'>Don't have an account? Create one now!</a>
			</form>
		</div>
	)
}

export default LoginForm;