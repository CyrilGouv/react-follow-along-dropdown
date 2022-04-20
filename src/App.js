import { useState } from 'react'
import Navbar from './components/Navbar'
import Submenu from './components/Submenu'
import Hero from './components/Hero'

import { links } from './data'

import './App.css'


const App = () => {

  const [show, setShow] = useState(false)
  const [position, setPosition] = useState('')
  const [link, setLink] = useState([])

  const handleSubmenu = e => {
    
    const targetElText = e.target.textContent
    const targetElClient = e.target.getBoundingClientRect()
    const targetElLeft = (targetElClient.left + targetElClient.right) / 2

    setShow(true)
    setPosition(targetElLeft)
    targetLinks(targetElText)
  }

  const closeSubmenu = () => {
    setShow(false)
  }

  const targetLinks = targetElText => {
    const targetSubmenu = links.filter(link => link.page === targetElText)
    setLink(targetSubmenu[0])
  }


  return (
    <div className="App">
      <Navbar handleSubmenu={ handleSubmenu } closeSubmenu={ closeSubmenu } />
      <Submenu show={ show } position={ position } link={ link } />
      <Hero closeSubmenu={ closeSubmenu } />
    </div>
  )
}

export default App
