import React from 'react'
import styles from './Profile.module.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import { Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className={styles.profile_container}>
      {/* <div className={styles.leftSideBar}>
        <ul>
            <li>Blogs</li>

          
        </ul>
      </div> */}
        <LeftSideBar />
        <Outlet />
    </div>
  )
}

export default Profile
