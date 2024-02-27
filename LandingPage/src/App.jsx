import React from "react"
import {Header} from "./components/Header/Header"
import {Home} from "./components/Home/Home"
import {Exhibitions} from "./components/Exhibitions/Exhibitions"
import {VisitorInfo} from "./components/VisitorInfo/VisitorInfo"
import {Artists} from "./components/Artists/Artists"
import {Register} from "./components/Register/Register"
import {Footer} from "./components/Footer/Footer"

export default function App (){
    return(
        <>
           <Header/>
           <Home/>
           <Exhibitions />
           <Footer/> 
        </>
    )
}