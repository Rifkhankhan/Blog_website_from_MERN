import React, { useEffect, useState } from 'react'
// import FruitsList from "../../Components/Fruits/FruitsList";
import styles from './Personal.module.css'
// import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../BlogCard/BlogCard'
import { getBlogs } from '../../Actions/BlogAction'
import vk from '../../images/vk.jpg'

const Personal = () => {
	const dispatch = useDispatch()
	const blogs = useSelector(state => state.blog.blogs)
	const userData = useSelector(state => state.auth.authData)
	const myBlogs = blogs.filter(blog => blog.user.id === userData?._id)
  const [editMode,setEditMode] = useState(false)

  let datas = {
    fname: 'Mohammed',
		lname: 'Rifkhan',
		phone: 85154141,
		address: 'dasdwfascswfwfwe',
		age: 45,
		email: 'ewfwfe@gmail.com',
		password: '415cwecec52cw5'
  }
	const [data, setData] = useState({
		fname: '',
		lname: '',
		phone: '',
		address: '',
		age: '',
		email: '',
		password: ''
	})

	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	const [validation, setValidation] = useState({
		fname: '',
		lname: '',
		phone: '',
		address: '',
		age: '',
		email: '',
		password: ''
	})
	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
	}
	const submitHandler = e => {
		// page will not redirect default
		e.preventDefault()
	}

	const checkValidation = () => {
		if (
			data.fname.length > 0 &&
			data.lname.length > 0 &&
			(data.phone.length > 9 && data.phone.length <= 10)  &&  
			 data.age > 10 &&
			data.address.length > 0 &&
		(	data.email.includes('@') && data.email.length > 0) &&
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

  const editHandler = () =>{
    setEditMode(true)
  }
	return (
		<div className={styles.container}>
			{userData.length ? (
				<img src={userData.profile} className={styles.propic} />
			) : (
				<img src={vk} alt="" className={styles.propic} />
			)}
			<hr />

			<div className={styles.personlDetailsContainer}>
			{editMode ? <h1>Edit The Details</h1>	: <h1>Personal Details</h1>}
				<div className={styles.personalDatas}>
					<form onSubmit={submitHandler}>
						<div className={styles.formGroup}>
							<label>First Name : </label>
							{editMode ? <input
								placeholder="Enter Your First Name"
								onClick={handleChange}
								name="fname"
                defaultValue={data.fname}
                
							/> :<input
         
              value="Mohammed"
            />}
						</div>

						<div className={styles.formGroup}>
							<label>Last Name : </label>
							{editMode ? <input
								placeholder="Enter Your Last Name"
                type='text'
								onClick={handleChange}
								name="lname"
                defaultValue={data.lname}
                
							/> :<input
            
              value="Mohammed"
            />}
						</div>

						<div className={styles.formGroup}>
							<label>Age : </label>
						

              {editMode ? <input
                		placeholder="Enter Your age"
                  onClick={handleChange}
                  name="age"
                  defaultValue={data.age}
                  
                /> :	<input
								type="number"
             
								value="25"
							/>}
						</div>

						<div className={styles.formGroup}>
							<label>Address : </label>
						
                {editMode ? <input
               	placeholder="Enter Your Address"
                  onClick={handleChange}
                  name="address"
                  defaultValue={data.address}
                  
                /> :			<input
							
								value="40,common road palamunai-5"
							/>}
						</div>

						<div className={styles.formGroup}>
							<label>Phone number : </label>
						
               {editMode ? <input
               								placeholder="Enter Your Phone number"

                  onClick={handleChange}
                  name="phone"
                  defaultValue={data.phone}
                  type='number'
                  
                /> :				<input
            
								value="6851654185"
							/>}
						</div>
						<div className={styles.formGroup}>
							<label>Email : </label>
						
               {editMode ? <input
                  placeholder="Enter Your Email"
                  type='email'
                  onClick={handleChange}
                  name="email"
                  defaultValue={data.email}
                  
                /> :				<input
					
								value="rifkhan@gmail.com"
							/>}
						</div>
          {editMode &&  <div className={styles.formGroup}>
							<label>Password : </label>
						
               {editMode ? <input
                  placeholder="Enter Your Email"
                  onClick={handleChange}
                  type='password'
                  name="password"
                  defaultValue={data.password}
                  
                /> :				<input
					
							/>}
						</div>}
						<div className={styles.formGroup}>
							{!editMode && <button onClick={editHandler}>Edit</button>}
							{editMode && <button onClick={editHandler} disabled={!validation}>Update</button>}
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Personal
