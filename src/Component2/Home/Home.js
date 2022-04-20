import React from 'react'
import styled from "styled-components"
import Slider from "../Home/Slider"


function Home() {
  
  return (
    <div>
<Intro>
  WELCOME TO 2022 SOFTWARE ENGINEERING COHORTS' PAGE!!! </Intro>
  <Slider />
    </div>
  )
}

export default Home

const Intro = styled.div`
background-color: black;
color: white;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-size: larger;
font-weight: bolder;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`