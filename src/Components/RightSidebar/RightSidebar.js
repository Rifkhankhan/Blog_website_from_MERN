import React from 'react'
import styles from './RightSidebar.module.css'
import cr7 from './../../images/cr7.jpg'
import animal from './../../images/whiteTiger.jpg'
import leo from './../../images/leo.jpg'

function RightSidebar() {
  return (
    <div className={styles.rightSideBar}>

    <div className={styles.searchSection}>
      <h3>Search</h3>
      <div>
        <input type="text" name="Search" value="Enter" />
        <button>Search</button>
      </div>
    </div>

    <div className={styles.latestPosts}>
      <h1>Latest Post</h1>
      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>
      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>

      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>

      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>
    </div>

    <div className={styles.latestPosts}>
      <h1>Popular Post</h1>
      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>
      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>

      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>

      <div>
        <img src={leo} alt="" />
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>
    </div>
    <div className={styles.latestPosts}>
                  <h1>Latest Comments</h1>
                  
      <div>
        <p>
          ssfsf swefwef wefwefwefwefwef wefwefwef wefwef wef fwefwe
          ewffffffff
        </p>
      </div>
              </div>
    <div className={styles.latestPosts}>
                  <h1>Archives</h1>

              </div>
  </div>
  )
}

export default RightSidebar
