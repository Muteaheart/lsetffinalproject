import React from 'react'
import styled from "styled-components"
import lsetf1 from "../About/lsetf1.jpg"
import Edfin from "../About/Edfin.jpg"
import usadf1 from "../About/usadf1.jpg"
import lsetf2 from "../About/lsetf2.jpg"
import GIZ from "../About/GIZ.jpg"
import FirstB from "../About/FirstB.png"
import UNDP from "../About/UNDP.png"
import USADF from "../About/USADF.jpg"

function About() {
  return (
    <AboutP>
    <Lagos>
The Lagos State Employment Trust Fund (LSETF) was established by The Lagos State Employment Trust Fund Law 2016 
to provide financial support to residents of Lagos State, for job, wealth creation and to tackle unemployment.
</Lagos>
<AboutI>
<img src={lsetf1} alt= "lsetf1" className="lsetf1"/>
<img src={lsetf2} alt = "lsetf2" className='lsetf2'/>
<img src={usadf1} alt = "usadf1" className='usadf1'/>
</AboutI>
<Vwrap><Vision>Vision and Mission</Vision>
<Create>Creating Employment and Entrepreneurship opportunities for all Lagos residents</Create> <br/>
<Enable>Enabling Lagos residents realise their aspirations by providing leverage abd access to finance</Enable>
</Vwrap>
<div>
  <Funding>Funding partners</Funding>
  <Logos>
  <img src={Edfin} alt= "Edfin" className="Edfin"/>
  <img src={FirstB} alt= "FirstB" className="FirstB"/>
  <img src={GIZ} alt= "GIZ" className="GIZ"/>
  <img src={UNDP} alt= "UNDP" className="UNDP"/>
  <img src={USADF} alt= "USADF" className="USADF"/>
  </Logos>
</div>
    </AboutP>
  )
}

export default About

const Vision = styled.div`
color: blue;
display: flex;
justify-content: center;
flex-wrap: wrap;
text-align: center;
font-size: xx-large;
font-weight: bolder;
font-style: oblique;
height: 100px;
`
const Funding = styled.div`
color: blue;
display: flex;
justify-content: center;
align-items: center;
font-size: xx-large;
font-weight: bolder;
font-style: oblique;
height: 100px;
`

const Vwrap = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`
const AboutI = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
img{
  height: 100%;
  width: 50%;
}
`

const Create = styled.div`
display: flex;
justify-content: center;
color: blue;
flex-wrap: wrap;

`
const Lagos = styled.div`
color: blue;
text-align: center;
font-size: larger;
font-weight: bolder;
display: flex;
flex-wrap: wrap;
`
const Enable = styled.div`
display: flex;
justify-content: center;
color: blue;
`
const Logos = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
img{
  height: 80px;
  width: 80px;
}
`
const AboutP = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
background-color: skyblue;
`