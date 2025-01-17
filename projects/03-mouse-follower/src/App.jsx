import { useEffect, useState } from 'react'

import './App.css'

const FollowMouse = () => {
  const [enable, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x:0, y:0 })
  
  //Pointer move
  useEffect(() => {
    console.log('efecto')

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }
    if(enable) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      //Limpia correctamente los eventos al cambiar enable
      window.removeEventListener('pointermove', handleMove)
      console.log('cleanUp')
    }     
  }, [ enable ] )

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => document.body.classList.remove('no-cursor')

  }, [enable])

  return (
    <main>
    <div 
    style={{
       position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
    }}
    >

    </div>
    <h3>
      Proyecto 3
    </h3>
    <button
    onClick={() => setEnabled(!enable)}
    >
      {enable ? 'Desactivar ': 'Activar '}Seguir puntero
    </button>
   </main>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    console.log('MONTADO')
  }, [mounted])
  return(
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse COMPONENT</button>
    </main>
  )
  
}

export default App
