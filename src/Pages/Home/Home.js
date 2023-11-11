import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../Actions/BlogAction'
import { useNavigate } from 'react-router-dom'
// import AddPostModel from '../../Components/AddPostModel/AddPostModel'
import moment from 'moment'
import datas from './../../Data/blogs.js'

const Home = () => {
	const blogs = useSelector(state => state.blog.blogs)
	const navigate = useNavigate()
	const [modalOpen, setModalOpen] = useState(false)
	const dispatch = useDispatch()
	const clickHandler = id => {
		navigate(`/blogs/${id}`)
	}
	// const date = moment(blog[0]?.createdAt).format('MM-DD-YYYY');

	useEffect(() => {
		dispatch(getBlogs())
	}, [])
	return (
		<div className={styles.container}>
			<section className={styles.homeImage}></section>
			<section className={styles.blogs_colomns}>
				<div className={styles.blogs}>
					{blogs.length > 0
						? blogs?.map(blog => (
								<div
									className={styles.blog}
									onClick={() => clickHandler(blog._id)}>
									<img src={blog.image} alt="" className={styles.image} />
									<div className={styles.data_div}>
										<h1 className={styles.title}>{blog.title}</h1>
										<p>{blog.desc}</p>
										<div className={styles.details}>
											<p className={styles.auther}>Rifkhan</p>
											<p className={styles.date}>
												{moment(blog.createdAt).format('MM-DD-YYYY')}
											</p>
											<p className={styles.date}>{blog.child}</p>
										</div>
									</div>
								</div>
						  ))
						: datas?.map(blog => (
								<div
									className={styles.blog}
									onClick={() => clickHandler(blog._id)}>
									<img src={blog.image} alt="" className={styles.image} />
									<div className={styles.data_div}>
										<h1 className={styles.title}>{blog.title}</h1>
										<p>{blog.desc}</p>
										<div className={styles.details}>
											<p className={styles.auther}>Rifkhan</p>
											<p className={styles.date}>
												{moment(blog.createdAt).format('MM-DD-YYYY')}
											</p>
											<p className={styles.date}>{blog.child}</p>
										</div>
									</div>
								</div>
						  ))}
				</div>

				<RightSidebar />
			</section>
		</div>
	)
}

export default Home
