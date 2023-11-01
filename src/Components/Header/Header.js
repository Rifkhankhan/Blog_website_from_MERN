/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import  './Header.css'
import profile from './../../images/profile.png'
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window
	return {
		width,
		height
	}
}

const Header = props => {
	const [settingIsOpen, setSettingIsOpen] = useState(false)
  
	const [height,setHeight] = useState()

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.scrollY)
		}
		
		window.addEventListener('scroll',handleResize)
		
		return () => window.removeEventListener('scroll', handleResize);
	},[height])
	
	
	const handleClick = e => {
		e.preventDefault()

		document
			.getElementsByClassName('header-dropDown')[0]
			.classList.toggle('header-dropDown-show')
	}

	const showCardToggleHandler = () => {
		props.showCardToggleHandler()
	}

	const listOpenHandler = e => {
		e.preventDefault()
		if (settingIsOpen) {
			setSettingIsOpen(current => !current)
		}
		// setIsOpen(current => !current)
	}

	const humbergurGHandleClick = e => {
		e.preventDefault()
		// setIsOpen(current => !current)
		setSettingIsOpen(current => !current)
	}

	const profileHandler = e => {
		e.preventDefault()
		// setIsOpen(false)
		setSettingIsOpen(false)
		// navigate('/profile')
	}

	return <section className={height <= 300 ? 'header-nav' : 'header-nav header-nav-change'}>
    <div className='header-logo'>MyBlogs</div>
    <div className='header-menus'>
      <Link to='/' className='menu'>Home</Link>
      <Link to='/sports' className='menu'>Sports</Link>
      <Link to='/technology' className='menu'>Technology</Link>
      <Link to='/animals' className='menu'>Animals</Link>
      <Link to='/news' className='menu'>News</Link>
      <Link to='/profile' className='menu profile-btn'>
		<img src={profile} alt="profile" />
	  </Link>
    </div>
    <div></div>
  </section>
}

export default Header
