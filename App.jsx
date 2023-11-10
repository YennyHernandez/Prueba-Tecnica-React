import { useEffect, useState } from 'react'
import './app.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const urlsite = 'https://cataas.com/says/'

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
       
      })         
  }, [])
  useEffect(() =>{
    if(!fact) return
    const SplitThreeFirstWords = fact.split(' ', 3)
    setthreeFirstWords(SplitThreeFirstWords)
    fetch(`https://cataas.com/cat/says/${SplitThreeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response  
        console.log(response)    
        setImageUrl(url)
        console.log(url) //asegurar lo que esta llegando
      })
  },[fact])

  return (
    <> 
      <main>
        <h1 >Aplicacion de gaticos</h1>
        {/* Renderizado condicional */}
        <section>
          <h3>Recuperación del hecho:</h3>
          {fact && <p>{fact}</p>} 
          </section>
          <div className='palabras'>
          <h3>Tres primeras palabras del hecho:</h3>
          {fact && <p>{threeFirstWords}</p>} 
          </div>
          <div className='imagen'>            
          <h3>Imagen relacionada al hecho:</h3>
          {ImageUrl && <img src={`${urlsite}${ImageUrl}`} alt={`Imagen tomada desde ${fact}`} />} 
          </div>      
      </main>

    </>
  )
}
