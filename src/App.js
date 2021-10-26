import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const App = () => {
  const [hora, setHora] = useState(12)
  const [minuto, setMinuto] = useState(10)
  const [segundo, setSegundo] = useState(21)

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(segundo + 1)
      if (segundo == 59) {
        setSegundo(0)
        setMinuto(minuto + 1)
        if (minuto == 59) {
          setMinuto(0)
          setHora(hora + 1)
        }
        if (hora == 23) {
          setHora(0)
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <Container>
      <h2>
        {hora}:{minuto}:{segundo}
      </h2>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-items: center;

  h2 {
    color: #747474;
    text-align: center;
    width: 200px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px 0 20px 0;
    background-color: #ccc;
  }
`

export default App
