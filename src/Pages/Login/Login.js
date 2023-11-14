import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import logo from './../../images/profile.png'
import { Link, useNavigate } from 'react-router-dom'
import google from '../../images/google-plus.png'
import linkedin from './../../images/linkedin.png'
import fb from './../../images/facebook.png'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../Redux/authSlice'
import { logIn, signUp,forgotPassword } from '../../Actions/userAction'
function Login() {
	const [login, setLogin] = useState(true)
	const isLoading = useSelector(state => state.auth.isLoading)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [data, setData] = useState({ name: '', email: '', password: '' })
	const [forgot, setForgot] = useState(false)
	const [email,setEmail] = useState('')

	useEffect(() => {
		
	},[isLoading])
	const btnHandler = e => {
		setForgot(false)

		setLogin(current => !current)
	}

	const [validation, setValidation] = useState({
		name: '',
		email: '',
		password: ''
	})

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	if (isAuthenticated) {
		navigate('/profile')
	}

	const handleSubmit = e => {
		// page will not redirect default
		e.preventDefault()
		if(forgot){
			dispatch(forgotPassword({email:email}))
		}
		else{
			dispatch(authActions.changeLoading())

			if (login) {
				dispatch(logIn(data))
			} else {
				dispatch(signUp(data))
			}
		}
		
	}
	const checkValidation = () => {
		if (
			data.name.length > 0 &&
			data.email.includes('@') &&
			data.password.length >= 8
		) {
			setValidation(true)
		} else {
			setValidation(false)
		}
	}

	useEffect(() => {
		checkValidation()
	}, [data])

	const forgotPasswordHandler = () => {
		setForgot(true)
	}

	const emailhandleChange = (e) => {
		setEmail(e.target.value)
	}
	return (
		<div className={styles.container}>
			<section className={styles.title}>
				{forgot && <p>Forgot Password</p>}
				{!forgot && login && <p>Login</p>}
				{!forgot && !login && <p>Register</p>}
			</section>
			<section className={styles.form_container}>
				<form onSubmit={handleSubmit}>
					<img src={logo} alt="logo" />

					{!forgot && !login && (
						<input
							type="text"
							name="name"
							defaultValue={data.name}
							onChange={handleChange}
							placeholder="Enter User Name"
							required
						/>
					)}
					{!forgot && <input
						type="email"
						name="email"
						defaultValue={data.email}
						onChange={handleChange}
						placeholder="Enter Email"
						required
					/>}
					{forgot && <input
						type="email"
						name="email"
						defaultValue={email}
						onChange={emailhandleChange}
						placeholder="Enter Email"
						required
					/>}
					{!forgot && (
						<input
							type="password"
							name="password"
							defaultValue={data.password}
							onChange={handleChange}
							placeholder="Enter Password"
							required
						/>
					)}

					{!isLoading && !forgot &&
						(login ? (
							<button
								disabled={
									!(data.email.includes('@') && data.password.length >= 8)
								}>
								LOG IN
							</button>
						) : (
							<button disabled={!validation}>REGISTER</button>
						))}
						{!isLoading && forgot &&
						
							<button
								disabled={
									!(email.includes('@') )
								}>
								Send Email
							</button>
						}
					{isLoading && (
						<button
							style={{ background: 'green', color: 'white' }}
							disabled={true}>
							LOADING...
						</button>
					)}

					<div>
						<p onClick={forgotPasswordHandler}>FORGOT PASSWORD</p>
						{login ? (
							<p onClick={btnHandler}>NEW USER? REGISTER</p>
						) : (
							<p onClick={btnHandler}>ALREADY HAVE? LOG IN</p>
						)}
					</div>
					<div className={styles.logos}>
						<img src={google} alt="" />
						<img src={fb} alt="" />
						<img src={linkedin} alt="" />
					</div>
				</form>
			</section>
		</div>
	)
}

export default Login
