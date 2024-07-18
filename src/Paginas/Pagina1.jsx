// Importaciones necesarias desde React y Axios para hacer solicitudes HTTP
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Componente funcional Pagina1 que muestra las últimas noticias de negocios de EE.UU.
export const Pagina1 = () => {
  // Estado para almacenar los datos de las noticias, el estado de carga y los errores
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  // Función asincrónica para extraer los datos de las noticias desde la API
  const ExtraerDatos = async () => {
    // Iniciando el estado de carga y limpiando cualquier error anterior
    setCargando(true)
    setError(null)

    try {
      // Realizando una solicitud GET a la API de noticias
      const respuesta = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e695b143dfa04cec89e0f4b0b5f6f6bc'
      )
      // Almacenando los artículos de noticias en el estado de datos
      setDatos(respuesta.data.articles)
    } catch (error) {
      // Capturando y almacenando cualquier error ocurrido durante la solicitud
      setError(error.message)
    } finally {
      // Marcando el estado de carga como falso, independientemente del resultado de la solicitud
      setCargando(false)
    }
  };

  // Efecto para llamar a ExtraerDatos al cargar el componente
  useEffect(() => {
    ExtraerDatos()
  }, []); // El arreglo vacío [] asegura que este efecto se ejecute solo una vez al montar el componente

  // Renderización del componente Pagina1
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Últimas Noticias</h2>
      {/* Mostrar mensaje de carga si se está extrayendo datos */}
      {cargando && <p>Cargando...</p>}
      {/* Mostrar mensaje de error si ocurrió un error durante la extracción de datos */}
      {error && <p className="text-danger">{error}</p>}
      {/* Mostrar los datos de las noticias si están disponibles */}
      {datos && (
        <div>
          <h2>Datos</h2>
          {/* Iterar sobre los datos de las noticias y mostrar cada noticia como una tarjeta */}
          <div className="row">
            {datos.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Autor: {item.author}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Exportación del componente Pagina1 para su uso en otras partes de la aplicación
export default Pagina1
