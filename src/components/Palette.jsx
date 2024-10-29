import React, { useState, useEffect } from 'react';
import axios from 'axios';
import heart_icon_border from '../heart-icon.png';
import heart_icon_filled from '../heart-icon-filled.png';

function Palette(props) {
    const [favourites, setFavourites] = useState([]);
    useEffect(function () {
        let favouriteIds = localStorage.getItem('colors');
        if (favouriteIds) {
            setFavourites(favouriteIds.split(','));
        }
    }, []);


    //copy selected color to clipboard
    let chooseColorr = (event) => {
        const mcolor = event.target.innerHTML;
        if (mcolor === 'copied') return
        navigator.clipboard.writeText(mcolor);
        event.target.innerHTML = 'copied';
        setTimeout(() => { event.target.innerHTML = mcolor }, 2000)
        //event.target.innerHTML = color;
        //console.log(mcolor);
    }
    // update likes count
    let handleLike = async (e, id, preLikes) => {
        if (favourites.includes(id)) {
            return;
        }
        let updateLikes = parseInt(preLikes) + 1;
        e.innerHTML = `<img src=${heart_icon_filled} alt="" width=${18} /> <span>${updateLikes}</span>`;
        await axios.get(`https://knowledgebase.whf.bz/?action=updateLikes&id=${id}`)
            .then(response => {
                localStorage.setItem('colors', localStorage.getItem('colors') + "," + id);
                setFavourites(...favourites, id);
                e.innerHTML = `<img src=${heart_icon_filled} alt="" width=${18} /> <span>${updateLikes}</span>`;
            });
    }
    return (
        <div className='palette-container'>
            <div className="palette">
                <div style={{ backgroundColor: props.data.color_1 }} className="ist"><span className='__color one' onClick={chooseColorr}> {props.data.color_1} </span > </div>
                <div style={{ backgroundColor: props.data.color_2 }} className="second"><span className='__color two' onClick={chooseColorr}> {props.data.color_2} </span > </div>
                <div style={{ backgroundColor: props.data.color_3 }} className="third"><span className='__color three' onClick={chooseColorr}> {props.data.color_3} </span > </div>
                <div style={{ backgroundColor: props.data.color_4 }} className="fourth"><span className='__color four' onClick={chooseColorr}> {props.data.color_4} </span ></div>
            </div>

            <div className="footer" >
                <div className="likes" onClick={(e) => handleLike(e.currentTarget, props.data.id, props.data.likes)}><img src={favourites.includes(props.data.palette_id) ? heart_icon_filled : heart_icon_border} alt="" width={18} /> <span>{props.data.likes || 0}</span></div>
                <div className="pub-date">{props.data.pub_date}</div>
            </div>
        </div >

    )
}




export default Palette