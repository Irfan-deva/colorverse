import React, { useState } from 'react'
import axios from 'axios';
import '../css/form.css'

function Form() {

    const [inputs, setIputs] = useState({ 'action': 'addColor' });
    const handlechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setIputs(inputs => {
            return { ...inputs, [name]: value }
        });
        console.log(inputs);
    }
    console.log('form me');
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("https://knowledgebase.whf.bz/?action=updateLikes&id=${id}", inputs, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(response => {
            console.log(response)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handlesubmit} >
                <label htmlFor="">COLOR 1</label>
                <input type="text" name="color_1" onChange={handlechange} value={inputs.color_1 || ""} placeholder="eg. #ffffff" required />

                <label htmlFor="">COLOR 2</label>
                <input type="text" name="color_2" onChange={handlechange} value={inputs.color_2 || ""} placeholder="eg. #ffffff" required />

                <label htmlFor="">COLOR 3</label>
                <input type="text" name="color_3" onChange={handlechange} value={inputs.color_3 || ""} placeholder="eg. #ffffff" required />

                <label htmlFor="">COLOR 4</label>
                <input type="text" name="color_4" onChange={handlechange} value={inputs.color_4 || ""} placeholder="eg. #ffffff" required />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;