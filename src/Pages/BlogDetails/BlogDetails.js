import React, { useEffect, useRef, useState } from 'react'
import styles from './BlogDetails.module.css'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import cr7 from './../../images/vk.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs, pushComment } from '../../Actions/BlogAction'

import moment from 'moment'
// tinymce editi
import { Editor } from '@tinymce/tinymce-react'
// comment section
// like section

function BlogDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const blogs = useSelector(state => state.blog.blogs)
	const [reply, setReply] = useState()

	useEffect(() => {
		dispatch(getBlogs())
	}, [id])

	const blog = blogs?.filter(blog => blog._id === id)

	const date = moment(blog[0]?.createdAt).format('MM-DD-YYYY')

	const commentHandler = e => {
		setReply(e.target.value)
	}
	const user = {
		id: 'user123456',
		name: 'Rifkhan',
		image:
			'https://res.cloudinary.com/homedelivery/image/upload/v1698829199/HomeDelivery/ztw97mhij4dcohdbkxmv.jpg'
	}

	const formSubmitHandler = e => {
		e.preventDefault()
		const formData = {
			user: user,
			id: id,
			reply: reply
		}
		dispatch(pushComment(formData))
	}

	return (
		<div className={styles.BlogDetails}>
			<section className={styles.blogs_colomn}>
				<div className={styles.blogs}>
					<img src={blog[0]?.image} alt="image" />
					<p className={styles.date}>{date}</p>
					<h2>{blog[0]?.title}</h2>
					<p className={styles.desc}>{blog[0]?.desc}</p>
					<form
						onSubmit={formSubmitHandler}
						>
						<section className={styles.comments}>
							<textarea
								value={reply}
								onChange={commentHandler}
								placeholder="Reply for this blog"
							/>
							<button >Reply</button>
						</section>
					</form>
				</div>
				<RightSidebar color="rgb(14, 75, 95)" detail={true} blog={blog[0] ? blog[0] : []} />
			</section>
		</div>
	)
}

export default BlogDetails
