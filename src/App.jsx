import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [post, setPost] = useState(1)
  const [personaje, setPersonaje] = useState(0)
  const [pagina, setPagina] = useState(1)
  
  
  useEffect(() => {    
    obtenerPost()    
  }, [personaje])


  const obtenerPost = async()=>{
    const baseURL = `https://rickandmortyapi.com/api/character/?page=${pagina}`  

    try {
      const response = await axios.get(baseURL);
      setPost(response.data.results[personaje]);
      } catch (err) {
      // Errores
      console.log(err.response.data); I
      console.log(err.response.status);
      console.log(err.response.headers);
      }

  }


  if (!post) return null

  return (
    <div>
      <h1>{post.name} {personaje}</h1>
      <img src={post.image} alt={post.name} />
      <h3>{post.status}</h3>
      <p>Personaje # {personaje + 1}</p>
      <button onClick={()=>{
      setPersonaje(personaje + 1) 
      console.log("personaje: ", personaje)
      if(personaje == 19){
        alert("Llego al final:" + personaje + " pagina: " + pagina)
        setPagina(pagina + 1)
        setPersonaje(personaje = 1) 
        
      }
       
    
      }}>Click aquí {personaje}</button>
    </div>
  );
  
}

export default App
