import React, { useEffect } from 'react'
// import FruitsList from "../../Components/Fruits/FruitsList";
import styles from './Dashboard.module.css'
// import { getFruits, getProducts } from "../../../Actions/FruitAction";
import { useDispatch, useSelector } from 'react-redux'
import like from './../../images/positive-vote.png'
import dislike from './../../images/dislike.png'
import comments from './../../images/comments.png'
import blog from './../../images/blog.png'
import DashboardTable from '../DashboardTable/DashboardTable'
import Card from '../Card/Card'
import { getBlogs } from '../../Actions/BlogAction'
const Dashboard = () => {
	const dispatch = useDispatch()
  const blogs = useSelector(state => state.blog.blogs)

    useEffect(() => {
      dispatch(getBlogs())
  },[])


	return (
		<div className={styles.Dashboard}>
			<section className={styles.section1}>
				<Card img={like} count={11} text="likes i got"/>
				<Card img={blog} count={22} text="My blogs"/>
				<Card img={comments} count={20} text="Comments i got"/>
				<Card img={dislike} count={56} text="Dislikes i got"/>
			</section>
      <DashboardTable blogs={blogs}/>
			{/* date title image desc likes comments dislikes */}
		</div>
	)
}

export default Dashboard
