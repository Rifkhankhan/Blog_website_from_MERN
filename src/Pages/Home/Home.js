import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const Home = () => {
	return (
		<div className={styles.container}>
			<section className={styles.homeImage}></section>
			<section className={styles.blogs_colomns}>
				<div className={styles.blogs}>
					<div className={styles.blog}>
						<img src={cr7} alt="" className={styles.image} />
						<h1 className={styles.title}>
							Cristiano Ronaldo is a Popular player
						</h1>
						<p>
							lorem fwefwef wefwefwef fwefwefwef wefwefewf hefbweiufjwef
							fewfhwebfwef wefbwefiwekjfnwefwefwe ewfwejfbwenfjkwe wefbwef
						</p>
						<div className={styles.details}>
							<p className={styles.auther}>Rifkhan</p>
							<p className={styles.date}>July 16 2023</p>
						</div>
					</div>
					<div className={styles.blog}>
						<img src={leo} alt="" className={styles.image} />
						<h1 className={styles.title}>
							Cristiano Ronaldo is a Popular player
						</h1>
						<p>
							lorem fwefwef wefwefwef fwefwefwef wefwefewf hefbweiufjwef
							fewfhwebfwef wefbwefiwekjfnwefwefwe ewfwejfbwenfjkwe wefbwef
						</p>
						<div className={styles.details}>
							<p className={styles.auther}>Rifkhan</p>
							<p className={styles.date}>July 16 2023</p>
						</div>
					</div>
					<div className={styles.blog}>
						<img src={animal} alt="" className={styles.image} />
						<h1 className={styles.title}>
							Cristiano Ronaldo is a Popular player
						</h1>
						<p>
							lorem fwefwef wefwefwef fwefwefwef wefwefewf hefbweiufjwef
							fewfhwebfwef wefbwefiwekjfnwefwefwe ewfwejfbwenfjkwe wefbwef
						</p>
						<div className={styles.details}>
							<p className={styles.auther}>Rifkhan</p>
							<p className={styles.date}>July 16 2023</p>
						</div>
					</div>
				</div>

				<RightSidebar />
			</section>
		</div>
	)
}

export default Home
