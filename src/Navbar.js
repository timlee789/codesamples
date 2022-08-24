import React from 'react';
import {Link, useMatch, useResolvedPath } from 'react-router-dom'
function Navbar() {
  return (
   <nav className='nav'>
    <Link to='/' className='site-title'>
        Beauty Elements
    </Link>
    <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {/* <li>
            <a href='/pricing'>Pricing</a>
        </li>
        <li>
            <a href='/about'>About</a>
        </li> */}
    </ul>
   </nav>
  )
}
function CustomLink({ to, children, ...props}) {
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
export default Navbar