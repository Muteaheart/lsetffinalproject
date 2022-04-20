import 'antd/dist/antd.css';
import React from 'react'
import styled from "styled-components"
import Lsetfproject from './Component2/Lsetfproject'
import Header from './Component2/Header/Header'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './Component2/About/About'
import Participants from "./Component2/Participants/Participants"
import Home from './Component2/Home/Home'

function App() {
  return (
    <>
    <Router>
    <Header/>
    <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/about' element ={<About/>} />
    <Route path='/lsetfproject' element ={<Lsetfproject/>} />
    </Routes>
    
    </Router>
    

    </>
  )
}

export default App









// // import React from 'react'
// // import styled from "styled-components"
// // import Card from "./Components/Card/Card"
// // import Footer from "./Components/Footer/Footer"
// // import Header from "./Components/Header/Header"

// // // function App() {
// // //   return (
// // //     <>
// // // <Header />
// // // <Card />
// // // <Footer />

// // //     </>
// // //   )
// // // }

// // export default App