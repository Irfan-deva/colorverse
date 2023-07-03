import React from 'react';

// import axios from 'axios';
function Leftbar() {

    // const setPopular = () => {
    //     axios.get('http://localhost:3001/api/colors/popular')
    //         .then(response => {
    //             console.log(response.data);
    //             // props.handleData(response.data);
    //         })
    // }
    return (
        <div className='leftbar-container'>

            <ul className='nav-links'>
                <li className='active'>New</li>
                <li>Popular</li>
                <li>Random</li>
            </ul>
        </div>
    )
}

export default Leftbar;