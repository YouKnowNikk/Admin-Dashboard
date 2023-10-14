import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../PageContent/MainContent'

function AppRoutes() {
  return (
   <Routes>
    <Route path = "/" element ={<MainContent/>}/>
    <Route path = "/analytical" element ={<h1>Analytical</h1>}/>
    <Route path = "/inbox" element ={<h1>messages</h1>}/>
    <Route path = "/explore" element ={<h1>explore</h1>}/>
    <Route path = "/shop" element ={<h1>shop</h1>}/>
    <Route path = "/tools/setting" element ={<h1>settings</h1>}/>
    <Route path = "/tools/help" element ={<h1>help</h1>}/>
    <Route path = "/projects/amazon" element ={<h1>amazon</h1>}/>
    <Route path = "/prohects/invintyHQ" element ={<h1>invintyHQ</h1>}/>
   </Routes>
  )
}

export default AppRoutes