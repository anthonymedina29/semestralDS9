// Importación del paquete principal de React necesario para crear componentes
import React from 'react';

// Componente funcional Home que muestra la página de inicio
export const Home = () => {
  return (
    <div className="container mt-5">
      {/* Encabezado principal de la página */}
      <div className="jumbotron text-center bg-primary text-white">
        <h1 className="display-4">Bienvenidos a Nuestra Página</h1>
        <p className="lead">Explora las últimas noticias con nuestra API</p>
        <hr className="my-4" />
        <p className="mb-0">Desarrollada con amor por:</p>
      </div>
      {/* Sección de desarrolladores */}
      <div className="row mt-4">
        {/* Tarjeta de cada desarrollador */}
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Miguel Veces</h5>
              <p className="card-text">Desarrollador</p>
              <img src="/public/antony.jpg" alt="Miguel Veces" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Luis Ramos</h5>
              <p className="card-text">Desarrollador</p>
              <img src="/public/antony.jpg" alt="Luis Ramos" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center ">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nibar Crespo</h5>
              <p className="card-text">Desarrollador</p>
              <img src="/public/antony.jpg" alt="Nibar Crespo" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Antony Medina</h5>
              <p className="card-text">Desarrollador</p>
              <img src="/public/antony.jpg" alt="Antony Medina" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exportación del componente Home para su uso en otras partes de la aplicación
export default Home;
