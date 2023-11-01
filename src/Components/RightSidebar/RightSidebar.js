import React, { useEffect, useState } from 'react'
import styles from './RightSidebar.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'
import CreateBlog from './../AddPostModel/CreateBlog'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { getComments } from '../../Actions/BlogAction'

// need to sort blogs
// need  to sort with likes
// comments
// archives

function RightSidebar(props) {
	const [modalOpen, setModalOpen] = useState(false)
	const blogs = useSelector(state => state.blog.blogs)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const modelHandler = () => {
		setModalOpen(true)
	}

	const onClickHandler = id => {
		navigate(`/blogs/${id}`)
	}
	console.log(props.blog?.comments)

	
	return (
		<div
			className={props.color ? styles.rightSideBar_color : styles.rightSideBar}>
			<div className={styles.searchSection}>
				<h3>Search</h3>
				<div>
					<input type="text" name="Search" value="Enter" />
					<button onClick={modelHandler}>Search</button>
				</div>
			</div>

			<div className={styles.latestPosts}>
				<h1>Latest Post</h1>
				{blogs.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className={styles.latestPosts}>
				<h1>Popular Post</h1>
				{blogs.map(blog => (
					<div
						className={styles.parentDiv}
						onClick={() => onClickHandler(blog._id)}>
						<img src={blog.image} alt="" />
						<div>
							<p className={styles.title}>{blog.title}</p>
							<p className={styles.date}>
								{moment(blog.createdAt).format('MM-DD-YYYY')}
							</p>
						</div>
					</div>
				))}
			</div>

			{props.detail && props.blog?.comments?.length > 0 && (
				<div className={styles.latestPosts}>
					<h1>Latest Comments</h1>
					<div className={styles.commentBox}>
						{props.blog?.comments?.map(comment => <p>{comment.value}</p>)}
						
					</div>
				</div>
			)}

			<div className={styles.latestPosts}>
				<h1>Archives</h1>
				{blogs.map(blog => (
					<p
						onClick={() => onClickHandler(blog._id)}
						className={styles.archivedDates}>
						{moment(blog.createdAt).format('MM-DD-YYYY')}
					</p>
				))}
			</div>
		</div>
	)
}

export default RightSidebar
