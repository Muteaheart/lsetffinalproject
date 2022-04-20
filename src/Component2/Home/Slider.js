import React from 'react'
import "./Slider.css"
import { Carousel } from 'antd';



function Slider() {

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: '500px',
    width: "100%",
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };

  return (
    <>
   <Carousel afterChange={onChange} autoplay>
    <div className='s1'>
        <h3 style={contentStyle}></h3>
    </div>
    <div className='s2'>
        <h3 style={contentStyle}></h3>
    </div>
    <div className='s3'>
        <h3 style={contentStyle}></h3>
    </div>
    <div className='s4'>
        <h3 style={contentStyle}></h3>
    </div>
  </Carousel>,

    </>
  )
}

export default Slider