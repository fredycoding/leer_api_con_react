import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let personajeinicial = 0
  const [pagina, setPagina] = useState(1);
  const [post, setPost] = useState(1);
  const [personaje, setPersonaje] = useState(personajeinicial);

  let baseURL = `https://rickandmortyapi.com/api/character/?page=${pagina}`;

  useEffect(() => {
    obtenerPost();

  }, [personaje]);


  const obtenerPost = async () => {
    try {
      let response = await axios.get(baseURL);
      setPost(response.data.results[personaje]);
    } catch (err) {
      // Errores
      console.log(err.response.data);
      I;
      console.log(err.response.status);
      console.log(err.response.headers);
    }
  };

  function cambiarPagina() {
     setPersonaje(personaje + 1);
    if (personaje >= 10) {         
      setPagina(pagina + 1);
      setPersonaje(personaje = 0);     
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
