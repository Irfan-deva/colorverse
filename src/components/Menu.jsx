import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Menu.main.css'

function Menu({ toogleIt }) {
    const menu_items = ['Home', 'Create', 'Contact', 'About', 'made by Irfan deva'];
    const links = ['/', '/form', '/', '/', '/']
    return (
        <>
            <ul>
                {
                    menu_items.map((item, key) => {
                        return (
                            <li key={key}><Link className='link' onClick={toogleIt} to={links[key]}>{item}</Link></li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default Menu