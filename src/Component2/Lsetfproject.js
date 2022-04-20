import React, {useEffect, useState } from "react";
import styled from "styled-components";
import Kelechi from "../Component2/Kelechi.jpg"
import {db} from "../Base";
import {getDocs, collection, doc, orderBy, query, } from "firebase/firestore";
import { async } from "@firebase/util"; 


function Lsetfproject() {
    const [Lsetfproject, setLsetfproject] = useState([])
    const usersCollectionRef = collection (db, "lsetfparticipants")
    const arrange = query(usersCollectionRef, orderBy("name"))
    const [Facebook] = useState ([])
    const [Whatsapp] = useState ([])
    const [GitHub] = useState ([])
    const [LinkedIn] = useState ([])

    const getData = async () => {
const data = await getDocs(arrange, usersCollectionRef)
setLsetfproject(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
    }
    useEffect (() => {
        getData();
    }, []);

  return (
      <>

<Participants>
<Cohorts> The 2022 LSETF/USADF Software Engineering Cohorts were tutored by <br/>
    Mr. Samuel Kelechi under the auspice of LoftyInc Digitals.
    <img src={Kelechi} alt= "Kelechi" className="Kelechi"/>
    </Cohorts>
   {Lsetfproject.map ((props) =>(
   <Container>
<br/>
   <Names> {props.name}</Names>
   <Pictures>
   <img src={props.imgurl} alt= "Image"/></Pictures>
   <Describe>{props.Description} </Describe>
   <Links>
   <a href={props.Facebook}> <i class="fa-brands fa-facebook"></i></a>
   <a href={props.Github}> <i class="fa-brands fa-github"></i></a>
   <a href={props.LinkedIn}> <i class="fa-brands fa-linkedin"></i></a>
   <a href={props.Whatsapp}><i class="fa-brands fa-whatsapp"></i></a>
   </Links>
</Container>
))
         }
</Participants>
        
      </>
  )
}

export default Lsetfproject

const Participants = styled.div `
background-color: skyblue;
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:space-around;
color: black;
`
const Cohorts = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: bolder;
img{
    height: 250px;
    width: 250px;
}
`
const Names = styled.div`
display: flex;
justify-content: center;
`
const Pictures = styled.div`
display: flex;
justify-content: center;
Img{
    width: 150px;
height: 150px;
border-radius: 20px;
}

`
const Describe = styled.div`
display: flex;
text-align: center;
justify-content: center;
font-style: italic;
`

const Container= styled.div`
width: 30%;
height:400PX;
display: flex;
color: black;
justify-content: space-around;
flex-direction: column;
text-align: center;
`

const Header = styled.div `

`

const Links = styled.a`
display: flex;
justify-content: space-around;
height: 150px;
`