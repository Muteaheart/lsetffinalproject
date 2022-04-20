import React from 'react'
import styled from "styled-components";
import LSETFLOGO from "../Header/LSETFLOGO.png"
import usadf from "../Header/usadf.jpg"
import {Link} from "react-router-dom"

function Header() {
  return (
    <>
    <Header1>
  <LeftContain>
     <img src= {LSETFLOGO} alt = "Image" className='LSETFLOGO'/>
     <img src= {usadf} alt= "Image1" className='usadf'/>
  </LeftContain>
  <RightContainer>
      <Link style={{textDecoration: "none", color:'white'}}to="/">Home</Link>
      <Link style={{textDecoration:'none', color:'white'}}to="/about">About</Link>
      <Link style={{textDecoration:'none', color:'white'}}to="/lsetfproject">Participants</Link>
  </RightContainer>
    </Header1>


    
    </>
  )
}

export default Header

const Header1= styled.div`
background-color: black;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
height: 100px;
color: white;
align-items: center;
`
const LeftContain = styled.div`
display: flex;
align-items: center;
width: 200px;
height: 100%;
img{
    width: 100%;
    height: 60%;
}
`

const RightContainer = styled.a`
display: flex;
width: 20%;
justify-content: space-around;
border-color: none;
`
