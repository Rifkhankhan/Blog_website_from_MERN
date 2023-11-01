import React from 'react'
import styles from './BlogCard.module.css'
import vk from './../../images/vk.jpg'
import moment from 'moment'

function BlogCard({ blog }) {
	return (
		<div className={styles.container}>
            <p className={styles.date}>{moment(blog?.createdAt).format('MM-DD-YYYY')}</p>
			<img src={blog?.image} alt="image" className={styles.image} />
			<div className={styles.content}>
				<h2 className={styles.title}>{blog?.title}</h2>
				<p className={styles.desc}>
					{blog?.desc}
				</p>
			</div>
		</div>
	)
}

export default BlogCard
