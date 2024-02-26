import React, { useState } from 'react'
import { Header, Footer } from './components'
import { Body } from './components/Body/Body'

export function App () {
  const [] = useState(true)

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}
