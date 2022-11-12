import React from 'react'
import axios from 'axios';
import heart_icon_border from '../heart-icon.png'
import heart_icon_filled from '../heart-icon-filled.png'

function Palette(props) {
    //copy selected color to clipboard
    let chooseColorr = (event) => {
        const mcolor = event.target.innerHTML;
        navigator.clipboard.writeText(mcolor);
        event.target.innerHTML = 'copied';
        setTimeout(() => { event.target.innerHTML = mcolor }, 2000)
        //event.target.innerHTML = color;
        //console.log(mcolor);
    }
    // update likes count
    // I'm passing the second parameter(data) as null, because I'm handling increment on server side => previousCount +1
    let handleLike = (e, id, preLikes) => {
        let updateLikes = parseInt(preLikes) + 1;
        e.innerHTML = `<img src=${heart_icon_filled} alt="" width=${18} /> <span>${updateLikes}</span>`;
        axios.get(`https://irfandevsportfolio.000webhostapp.com/colorverse/api/?action=like&id=${id}`)
            .then(response => {
                //console.log(response);
                //console.log(e);

            })
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
                <div className="likes" onClick={(e) => handleLike(e.currentTarget, props.data.palette_id, props.data.likes)}><img src={heart_icon_border} alt="" width={18} /> <span>{props.data.likes || 0}</span></div>
                <div className="pub-date">{props.data.pub_date}</div>
            </div>
        </div >

    )
}




export default Palette