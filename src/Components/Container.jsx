import React from 'react'
import Carousel from './Carousel'
import Hero from './Hero'
import Join from './Join'
import Welcome from './Welcome'

export default function Container() {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <Carousel/>
        <Join/>
    </div>
  )
}
