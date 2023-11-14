import React, { useEffect, useState } from 'react'
import styles from './ResetPage.module.css'
import logo from './../../images/profile.png'
import { Link, useNavigate } from 'react-router-dom'
import google from '../../images/google-plus.png'
import linkedin from './../../images/linkedin.png'
import fb from './../../images/facebook.png'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../Redux/authSlice'
import { logIn, signUp } from '../../Actions/userAction'
function ResetPage() {
	const [login, setLogin] = useState(true)
	const isLoading = useSelector(state => state.auth.isLoading)
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [data, setData] = useState({ rePassword: '', password: '' })

	const [validation, setValidation] = useState({
		rePassword: '',
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
		dispatch(authActions.changeLoading())

		if (login) {
			dispatch(logIn(data))
		} else {
			dispatch(signUp(data))
		}
	}
	const checkValidation = () => {
		if (
			data.password.length >= 8 && data.rePassword.length >= 8 && data.password === data.rePassword
		) {
			setValidation(true)
		} else {
			setValidation(false)
		}
	}

	useEffect(() => {
		checkValidation()
	}, [data])

	
	return (
		<div className={styles.container}>
			<section className={styles.title}>
				 <p>Reset Password</p>
		
			</section>
			<section className={styles.form_container}>
				<form onSubmit={handleSubmit}>
					<img src={logo} alt="logo" />

						<input
							type="password"
							name="password"
							defaultValue={data.password}
							onChange={handleChange}
							placeholder="Enter new password"
							required
						/>
							<input
							type="password"
							name="rePassword"
							defaultValue={data.rePassword}
							onChange={handleChange}
							placeholder="Retype the password"
							required
						/>
						

					{!isLoading && <button
								disabled={
									!validation
								}>
								Reset Password
							</button>}
						
					{isLoading && (
						<button
							style={{ background: 'green', color: 'white' }}
							disabled={true}>
							LOADING...
						</button>
					)}

				</form>
			</section>
		</div>
	)
}

export default ResetPage
