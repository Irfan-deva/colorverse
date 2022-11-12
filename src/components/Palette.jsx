import React from 'react'
import axios from 'axios';
import heart_icon_border from '../heart-icon.png'
function Palette(props) {
    //copy selected color to clipboard
    let chooseColorr = (event) => {
        const mcolor = event.target.innerHTML;


        navigator.clipboard.writeText(mcolor);
        event.target.innerHTML = 'copied';
        setTimeout(() => { event.target.innerHTML = mcolor }, 2000)
        //event.target.innerHTML = color;
        console.log(mcolor);
    }
    // update likes count
    // I'm passing the second parameter(data) as null, because I'm handling increment on server side => previousCount +1
    let handleLike = (event, id) => {
        axios.put(`http://localhost:3001/api/colors/update/${id}`, null)
            .then(response => {
                console.log(response.data);
            })
    }
    return (
        <div className='palette-container' >
            <div className="palette">
                <div style={{ backgroundColor: props.data.color_1 }} className="ist"><span className='__color one' onClick={chooseColorr}> {props.data.color_1} </span > </div>
                <div style={{ backgroundColor: props.data.color_2 }} className="second"><span className='__color two' onClick={chooseColorr}> {props.data.color_2} </span > </div>
                <div style={{ backgroundColor: props.data.color_3 }} className="third"><span className='__color three' onClick={chooseColorr}> {props.data.color_3} </span > </div>
                <div style={{ backgroundColor: props.data.color_4 }} className="fourth"><span className='__color four' onClick={chooseColorr}> {props.data.color_4} </span ></div>
            </div>

            <div className="footer" >
                <div className="likes" onClick={(e) => handleLike(e, props.data.palette_id)}><img src={heart_icon_border} alt="" width={18} /> {props.data.likes || 0}</div>
                <div className="pub-date">{props.data.pub_date}</div>
            </div>
        </div>

    )
}




export default Palette