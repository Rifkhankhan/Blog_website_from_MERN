import React, { useEffect } from 'react'
import styles from './Profile.module.css'
import LeftSideBar from '../../Components/LeftSideBar/LeftSideBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Profile() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
		if(!isAuthenticated){
			navigate('/')
		  }
	},[])

  const showSidebar = (condition) => {
    const profile_container = document.getElementById('profile_container')
    if(condition){
       profile_container.className += " sidebar-show";

    } else{
      profile_container.className = "profile_container";
    }
  }

   
  return (
    <div className={styles.profile_container} id='profile_container'>
      {/* <div className={styles.leftSideBar}>
        <ul>
            <li>Blogs</li>

          
        </ul>
      </div> */}

        <LeftSideBar showSidebar={showSidebar} />
        <Outlet />
    </div>
  )
}

export default Profile
