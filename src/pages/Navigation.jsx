
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/Navigation.css'
import logo from '../g673.png';
import menu_icon from '../menu-icon.png';

import Menu from '../components/Menu';
import { useRef } from 'react';

function Navigation() {
    const [toogleIsOn, setToogleIsOn] = useState(false);
    let toogleRef = useRef();
    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!toogleRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
                setToogleIsOn(false);
            }

        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    // toogle menu
    const toogleMenu = () => toogleIsOn ? setToogleIsOn(false) : setToogleIsOn(true)

    return (
        <div className='nav-container'>
            <Link to={'/'}><div className="logo"><img src={logo} alt="" width={30} /><p>COLORVERSE</p> </div></Link>

            <div className="menu" onClick={toogleMenu} ref={toogleRef}>
                <img src={menu_icon} alt="" width={30} />
            </div>
            <div className='main-menu' ref={menuRef}>  {toogleIsOn && <Menu toogleIt={toogleMenu} />}</div>

        </div>
    )
}

export default Navigation;