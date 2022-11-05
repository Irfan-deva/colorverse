import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Leftbar from '../components/Leftbar';
//import Palette from '../components/Palette';
import '../css/Home.css';

const Palette = lazy(() => import('../components/Palette'))

function Home() {
    const [palettes, setColorpalettes] = useState([]);

    //fetch color pelettes from database
    useEffect(function () {
        axios.get('https://irfandevsportfolio.000webhostapp.com/colorverse/api/?action=getAllPalettes')

            .then(response => {
                setColorpalettes(response.data)
                // console.log(response.data);
            })
    }, []);




    return <div className='container'>
        <Leftbar handleData={setColorpalettes} />
        <div className='grid-container'>
            {palettes.map((palette) => {
                return (
                    <Suspense fallback={<div>Loading...</div>}>  <Palette data={palette} key={palette.palette_id} /></Suspense>
                )
            })}


            {/* {palettes.map((palette, key) => {
                return <div className='palette-container'>
                    <div key={key} className="palette">
                        <div style={{ backgroundColor: palette.color_1 }} className="ist"><p className='__color one' onClick={chooseColorr}> {palette.color_1} </p ></div>
                        <div style={{ backgroundColor: palette.color_2 }} className="second"><p className='__color two' onClick={chooseColorr}> {palette.color_2} </p ></div>
                        <div style={{ backgroundColor: palette.color_3 }} className="third"><p className='__color three' onClick={chooseColorr}> {palette.color_3} </p ></div>
                        <div style={{ backgroundColor: palette.color_4 }} className="fourth"><p className='__color four' onClick={chooseColorr}> {palette.color_4} </p ></div>
                    </div>

                    <div className="footer" >
                        <div className="likes" onClick={(e) => handleLike(e, palette.palette_id)}><img src={heart_icon_border} alt="" width={18} /> {palette.likes || 0}</div>
                        <div className="pub-date">{palette.pub_date}</div>
                    </div>
                </div>

            })} */}
        </div >

    </div>
}

export default Home;