import React from 'react'
import Application from '../Components/Application/Application'
import BookTable from '../Components/BookTable/BookTable'
import CoffeeDetails from '../Components/CoffeeDetails/CoffeeDetails'
import Flavours from '../Components/Flavours/Flavours'
import HomeGallery from '../Components/HomeGallery/HomeGallery'
import HomeProducts from '../Components/HomeProducts/HomeProducts'
import HomeSlider from '../Components/HomeSlider/HomeSlider'

function Home() {
  return (
    <>
    {/* <CloseButton/> */}
    <HomeSlider/>
    <BookTable/>
    <Application/>
    <CoffeeDetails/>
    <Flavours/>
    <HomeProducts/> 
    <HomeGallery/>
    </>
  )
}

export default Home