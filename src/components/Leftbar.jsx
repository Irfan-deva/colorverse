import React from 'react';
import { Link } from 'react-router-dom';

function Leftbar({ page }) {


    return (
        <div className='leftbar-container'>

            <ul className='nav-links'>

                <Link to={'/'} className={page === 'home' ? 'active' : ''}>  <li >New</li></Link>
                <Link to={'/popular'} className={page === 'popular' ? 'active' : ''}> <li>Popular</li></Link>
                <Link to={'/random'} className={page === 'random' ? 'active' : ''}>  <li>Random</li></Link>
            </ul>
        </div>
    )
}

export default Leftbar;