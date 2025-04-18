import React from 'react'
import Hero from '../Components/Hero/hero'
import Popular from '../Components/Popular/popular'
import Offers from '../Components/Offers/offers'
import Collection from '../Components/NewCollection/newcollection'
import News from '../Components/News_leeter/news'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Collection/>
      <News/>
    </div>
  )
}

export default Home
