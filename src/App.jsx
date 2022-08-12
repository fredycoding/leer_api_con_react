import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App({ valorinicial }) {

  const [pagina, setPagina] = useState(1)
  const [post, setPost] = useState(1)
  const [personaje, setPersonaje] = useState(valorinicial)

  let baseURL = `https://rickandmortyapi.com/api/character/?page=${pagina}`

  useEffect(() => {
    obtenerPost()
  }, [personaje])


  const obtenerPost = async () => {
    try {
      let response = await axios.get(baseURL)
      setPost(response.data.results[personaje])
    } catch (err) {
      // Errores
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }
  };

  function cambiarPagina() {
    setPersonaje(personaje + 1)
    //Como los personajes van hasta del 0 al 19, cuando sea mayor cambia la página.
    if (personaje >= 19) {
      setPagina(pagina + 1)
      setPersonaje(valorinicial)
    }
  }

  return (
    <div>
      <h1>
        {post.name} {personaje}
      </h1>
      <img src={post.image} alt={post.name} />
      <h3>{post.status}</h3>
      <p>Personaje # {personaje + 1}</p>
      <p>Página # {pagina}</p>
      <button onClick={cambiarPagina}>Click aquí {personaje}</button>
    </div>
  );
}

export default App;
