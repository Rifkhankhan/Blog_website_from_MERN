import React, { useState } from 'react'
import styles from './Login.module.css'
import logo from './../../images/profile.png'
import { Link } from 'react-router-dom'
import google from '../../images/google-plus.png'
import linkedin from './../../images/linkedin.png'
import fb from './../../images/facebook.png'
function Login() {
	const [login, setLogin] = useState(true)

	const btnHandler = e => {
		setLogin(current => !current)
	}
	console.log(login)
	return (
		<div className={styles.container}>
			<section className={styles.title}>
				{login ? <p>Login</p> : <p>Register</p>}
			</section>
			<section className={styles.form_container}>
				<img src={logo} alt="logo" />

               {!login && <input type="text" name="" value="" placeholder="Enter User Name" />}
                <input type="email" name="" value="" placeholder="Enter Email" />
                <input type="password" name="" value="" placeholder="Enter Password" />
				
				{login ? <button>LOG IN</button> : <button>REGISTER</button>}

				<div>
					{Login && <p>FORGOT PASSWORD</p>}
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
			</section>
		</div>
	)
}

export default Login
