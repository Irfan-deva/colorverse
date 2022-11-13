import React from 'react'

function Skeleton() {
  return (
    <div className='palette-container'>
      <div className="palette" style={{ background: "#dedede", borderRadius: "15px" }}>
        <div className="ist" ></div>
        <div className="second"> </div>
        <div className="third"> </div>
        <div className="fourth"></div>
      </div>
      <div className="footer" >
        <div style={{ width: "50px", height: "20px", background: "#dedede", borderRadius: "5px" }}></div>
        <div style={{ width: "60px", height: "20px", background: "#dedede", borderRadius: "5px" }}></div>
      </div>
    </div>
  )
}

export default Skeleton