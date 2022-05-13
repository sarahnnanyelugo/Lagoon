import React from 'react'
import Calendar from './Calendar'
import Carousel from './Carousel'
import Hero from './Hero'
import Images from './Images'
import Join from './Join'
import Welcome from './Welcome'

export default function Container() {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <Calendar/>
        <Images/>
        <Carousel/>
        <Join/>
    </div>
  )
}
