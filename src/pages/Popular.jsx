import React, { lazy, Suspense } from 'react';
import Leftbar from '../components/Leftbar';
import Skeleton from '../components/Skeleton';
//import Palette from '../components/Palette';
import '../css/Home.css';
import { useSelector } from 'react-redux';
import { getPopular } from '../features/palette/paletteSlice';

const Palette = lazy(() => import('../components/Palette'))

function Popular() {
  // const [pallettes, setColorpalettes] = useState([]);
  const popular = useSelector((state) => getPopular(state))



  return <div className='container'>
    <Leftbar page={'popular'} />
    <div className='grid-container'>
      {popular && popular.map((palette, index) => {
        return (
          <Suspense fallback={<Skeleton />} key={palette.palette_id}>
            <Palette data={palette} key={palette.palette_id} />
          </Suspense>
        )
      })}
    </div >

  </div>
}

export default Popular;