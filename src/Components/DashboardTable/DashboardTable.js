import React from 'react'
import like from './../../images/positive-vote.png'
import styles from './DashboardTable.module.css'
import moment from 'moment'

function DashboardTable({blogs,title}) {
  return (
    <div className={styles.container}>
  <table className={styles.table}>
          <tr ><td>{title}</td></tr>
					<tr>
						<th>#</th>
						<th>Date</th>
						<th>Title</th>
						<th>Image</th>
						<th>Description</th>
						<th>Likes</th>
						<th>Comments</th>
						<th>Dislikes</th>
					</tr>
					{blogs.map( blog => <tr>
						<td>{blogs.indexOf(blog)+1}</td>
						<td>{moment(blog?.createdAt).format('MM-DD-YYYY')}</td>
						<td className={styles.title}>{blog?.title}</td>
						<td>
							<img src={blog?.image} alt="image" />
						</td>
						<td className={styles.desc}>
							{blog?.desc}
						</td>
						<td>50</td>
						<td>22</td>
						<td>11</td>
					</tr>)}
         
		
				</table>
    </div>
  
  )
}

export default DashboardTable
