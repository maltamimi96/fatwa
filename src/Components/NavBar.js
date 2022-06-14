import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='top--nav'>
        <div className='logo--div'>
        <Link to={"/"}><h1>Fatwa</h1></Link>
        </div>
        <div className='nav--links'>
            <ul className='links--ul'>
                <li className='link--li'>About</li>
                <li className='link--li'>Topics</li>
                <li className='link--li'>Mazhab</li>
                <li className='link--li'>Explore</li>
            </ul>
        </div>
        <div className='auth--links'>
            <ul className='links--ul'>
                    <Link to={"/sign-in"}><li className='link--li'>Login</li></Link>
                    <Link to={"/sign-up"}><li className='link--li'>Sign-Up</li></Link>
                </ul>
        </div>
    </nav>
    )
}

export default NavBar