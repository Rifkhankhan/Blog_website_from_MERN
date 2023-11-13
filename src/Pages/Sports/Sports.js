import React, { useEffect, useState } from 'react'
import styles from './Sports.module.css'
import SubHeader from '../../Components/SubHeader/SubHeader'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import datas from '../../Data/blogs'

import moment from 'moment'

import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../../Actions/BlogAction'
import { useNavigate } from 'react-router-dom'
import SportBlogCard from '../../Components/SportBlogCard/SportBlogCard'
function Sports() {
	const headings = ['Cricket', 'Football', 'Chess', 'VollyBall', 'Carrom']
	const blogs = useSelector(state => state.blog.blogs)
	const dispatch = useDispatch()
	const [game, setGame] = useState('')
	const navigate = useNavigate()
	const headHandler = head => {
		setGame(head)
	}
	useEffect(() => {
		dispatch(getBlogs())
	}, [])

	const clickHandler = id => {
		navigate(`/blogs/${id}`)
	}
	return (
		<div className={styles.sportsContainer}>
			<SubHeader headings={headings} headHandler={headHandler} />
			<section className={styles.blogs_colomn}>
				{blogs.length > 0 ? (
					<div className={styles.blogs}>
						{game === ''
							? blogs
									?.filter(blog => blog.parent.toLowerCase() === 'sports')
									.map(blog => (
										<SportBlogCard blog={blog}/>
									))
							: blogs
									?.filter(
										blog => blog.child.toLowerCase() === game?.toLowerCase()
									)
									.map(blog => (
										<div
											className={styles.blog}
											onClick={() => clickHandler(blog._id)}>
											<img src={blog.image} alt="" className={styles.image} />
											<div>
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
				) : (
					<div className={styles.blogs}>
						{game === ''
							? datas
									?.filter(blog => blog.parent.toLowerCase() === 'sports')
									.map(blog => (
										<div
											className={styles.blog}
											onClick={() => clickHandler(blog._id)}>
											<img src={blog.image} alt="" className={styles.image} />
											<div>
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
							: datas
									?.filter(
										blog => blog.child.toLowerCase() === game?.toLowerCase()
									)
									.map(blog => (
										<div
											className={styles.blog}
											onClick={() => clickHandler(blog._id)}>
											<img src={blog.image} alt="" className={styles.image} />
											<div>
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
				)}
				<RightSidebar />
			</section>
		</div>
	)
}

export default Sports
