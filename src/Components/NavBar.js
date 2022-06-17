import React from 'react'
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import { useContext } from 'react';

function NavBar() {
    const { auth } = useContext(AuthContext);

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
                <Link to={"/articles"}><li className='link--li'>Explore</li></Link>
            </ul>
        </div>
        <div className='auth--links'>
            <ul className='links--ul'>
                    <Link to={"/sign-in"}><li className='link--li'>Login</li></Link>
                    <Link to={"/sign-up"}><li className='link--li'>Sign-Up</li></Link>
                    <Link to={"/my-profile"}><li className='link--li'>{`username: ${auth?.username}`}</li></Link>

                </ul>
        </div>
    </nav>
    )
}

export default NavBar