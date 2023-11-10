import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import logo from './../../images/profile.png'
import { Link } from 'react-router-dom'
import google from '../../images/google-plus.png'
import linkedin from './../../images/linkedin.png'
import fb from './../../images/facebook.png'
import { useDispatch } from 'react-redux'
import { logIn, signUp } from '../../Actions/userAction'
function Login() {
	const [login, setLogin] = useState(true)
	const dispatch = useDispatch()
	
    const [data,setData] = useState({name: '', email: '', password: ''});


	const btnHandler = e => {
		setLogin(current => !current)
	}

	const [validation, setValidation] = useState({
        name: "",
        email: "",
        password: ""
      });

	const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

	const handleSubmit = (e) => {
        // page will not redirect default
        e.preventDefault();
		

        if(login){
			dispatch(logIn(data))
            // data.password === data.confirmPassword ? dispatch(signUp(data)) : setConfirmPassword(false);
        } else {
			dispatch(signUp(data))

            // dispatch(logIn(data))
        }
    }
	const checkValidation = () => {
    
        if(data.name.length > 0 && data.email.includes('@') && data.password.length >=8) {
			setValidation(true)
		}
		else{
			setValidation(false)
		}
		
      };

      useEffect(() => {
        checkValidation();
      }, [data]);


	return (
		<div className={styles.container}>
			<section className={styles.title}>
				{login ? <p>Login</p> : <p>Register</p>}
			</section>
			<section className={styles.form_container}>
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="logo" />

               {!login && <input type="text" name="name" defaultValue={data.name} onChange={handleChange} placeholder="Enter User Name" required/>}
                <input type="email" name="email" defaultValue={data.email} onChange={handleChange} placeholder="Enter Email" required />
                <input type="password" name="password" defaultValue={data.password} onChange={handleChange} placeholder="Enter Password" required/>
				
				{login ? <button  disabled={!(data.email.includes('@') && data.password.length >= 8)}>LOG IN</button> : <button disabled={!validation}>REGISTER</button>}

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
				</form>
			</section>
		</div>
	)
}

export default Login
