import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Menu.main.css'

function Menu({ toogleIt }) {

    return (
        <>
            <ul>
                <li><Link className='link' onClick={toogleIt} to={'/'}>Home</Link></li>
                <li><Link className='link' onClick={toogleIt} to={'/form'}>Create</Link></li>
                <li><a className='link' href="https://irfandeva.netlify.app" target="_blank" rel="noreferrer" onClick={toogleIt}>Contact</a></li>
                <li><Link className='link' onClick={toogleIt} to={'/'}>About</Link></li>
                <li><span className='link' onClick={toogleIt}>made by Irfan deva</span></li>
            </ul>
        </>
    )
}

export default Menu