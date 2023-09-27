import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const urlsite = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [ImageUrl, setImageUrl] = useState()
  const [threeFirstWords, setthreeFirstWords] = useState()
 
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(rest => rest.json())
      .then(data => {
        const { fact } = data // destructuración
        setFact(fact)
        const SplitThreeFirstWords = fact.split(' ', 3)
        setthreeFirstWords(SplitThreeFirstWords)
        fetch(`https://cataas.com/cat/says/${SplitThreeFirstWords}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { url } = response      
            setImageUrl(url)
            console.log(url) //asegurar lo que esta llegando
          })
      })         
  }, [])

  return (
    <> 
      <h1>Aplicacion de gaticos</h1>
      {/* Renderizado condicional */}
      <h3>Recuperación del hecho:</h3>
      {fact && <p>{fact}</p>} 
      <h3>Tres primeras palabras del hecho:</h3>
      {fact && <p>{threeFirstWords}</p>} 
      <h3>Imagen relacionada al hecho:</h3>
      {ImageUrl && <img src={`${urlsite}${ImageUrl}`} alt={`Imagen tomada desde ${fact}`} />} 
    </>
  )
}
