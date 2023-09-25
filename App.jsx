import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(rest => rest.json())
      .then(data => setFact(data.fact))
  }, [])
  return (
    <>
      <h1>Aplicacion de gaticos</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}
