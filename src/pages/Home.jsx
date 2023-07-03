import axios from 'axios';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Leftbar from '../components/Leftbar';
import Skeleton from '../components/Skeleton';
//import Palette from '../components/Palette';
import '../css/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPalettes } from '../features/palette/paletteSlice';

const Palette = lazy(() => import('../components/Palette'))

function Home() {
    // const [pallettes, setColorpalettes] = useState([]);
    const { palettes } = useSelector((state) => state.colors);
    const dispatch = useDispatch();

    //fetch color pelettes from database
    useEffect(function () {
        dispatch(getAllPalettes());
        // axios.get('https://irfandevsportfolio.000webhostapp.com/colorverse/api/?action=getAllPalettes')

        //     .then(response => {
        //         setColorpalettes(response.data)
        //         // console.log(response.data);
        //     })
    }, []);


    return <div className='container'>
        <Leftbar handleData={null} />
        <div className='grid-container'>
            {palettes && palettes.map((palette, index) => {
                return (
                    <Suspense fallback={<Skeleton key={index} />}>
                        <Palette data={palette} key={palette.palette_id} />
                    </Suspense>
                )
            })}
        </div >

    </div>
}

export default Home;