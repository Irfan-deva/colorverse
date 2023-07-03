import React, { lazy, Suspense, useEffect } from 'react';
import Leftbar from '../components/Leftbar';
import Skeleton from '../components/Skeleton';
//import Palette from '../components/Palette';
import '../css/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPalettes, getPopular } from '../features/palette/paletteSlice';

const Palette = lazy(() => import('../components/Palette'))

function Home() {
    // const [pallettes, setColorpalettes] = useState([]);
    const { palettes } = useSelector((state) => state.colors);
    const popular = useSelector((state) => getPopular(state))
    const dispatch = useDispatch();
    console.log('=================popular===================');
    console.log(popular);
    console.log('=============popular=======================');
    //fetch color pelettes from database
    useEffect(() => {
        dispatch(getAllPalettes());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return <div className='container'>
        <Leftbar page={'home'} />
        <div className='grid-container'>
            {palettes && palettes.map((palette, index) => {
                return (
                    <Suspense fallback={<Skeleton key={palette.palette_id} />}>
                        <Palette data={palette} key={palette.palette_id} />
                    </Suspense>
                )
            })}
        </div >

    </div>
}

export default Home;