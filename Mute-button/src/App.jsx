import { useState } from 'react'
import reactLogo from './assets/react.svg'
import on from './assets/icons/on.svg'
import off from './assets/icons/off.svg'
import './App.css'

function App(props) {

  const [mute, setMute] = useState(on)
  function Toggle() {
      if (mute === on) {
        setMute(off)
      } else {
        setMute(on)
      }
  }
  return (
    <div className="App">

      <img src={mute} type='button' onClick={Toggle} alt="svg" id='onImg'/>
    </div>
  )
}

export default App
