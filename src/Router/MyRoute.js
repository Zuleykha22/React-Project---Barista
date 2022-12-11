import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import StandardRightSidebar from '../Pages/StandardRightSidebar'

function MyRoute() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rightsidebar' element={<StandardRightSidebar/>} />
        </Routes>
    </div>
  )
}

export default MyRoute