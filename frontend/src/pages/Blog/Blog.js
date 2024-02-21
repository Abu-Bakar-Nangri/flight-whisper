import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import CSS from './Blog.module.css'

const Blog = () => {
  return (
    <div>
      <div className={CSS['container-fluid']}>
        <Header />
        <h1>Blog</h1>
        <p >
          <Link to={'/'} className={CSS['home-link']}><span>Home</span></Link>
          <i className={`${CSS['arrow']} fa-solid fa-arrow-right`}></i>
          <Link to={'/blog'} className={CSS['about-link']}><span>About Us</span></Link>
        </p>
      </div>
      <div className='container'>
        <h1>blog</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
