// Importaciones necesarias desde 'react-router-dom' para manejar el enrutamiento en la aplicación
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importación de componentes para las páginas específicas de la aplicación
import { Home } from "./Paginas/Home/";
import { Pagina1 } from "./Paginas/Pagina1";

// Definición del componente principal de la aplicación
const App = () => {
    return (
        <>
            {/* Configuración del enrutador principal que envuelve toda la aplicación */}
            <BrowserRouter>
                {/* Barra de navegación con estilo de Bootstrap */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/* Botón de toggler para colapsar la barra de navegación en dispositivos móviles */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Contenido colapsable de la barra de navegación */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* Enlace de navegación a la página principal (Home) */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio</Link>
                                </li>
                                {/* Enlace de navegación a la página que muestra la API */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/pagina1">Noticias</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Definición de las rutas de la aplicación */}
                <Routes>
                    {/* Ruta que renderiza el componente Home en la URL raíz */}
                    <Route path="/" element={<Home />} />
                    {/* Ruta que renderiza el componente Pagina1 en la URL '/Pagina1' */}
                    <Route path="/Pagina1" element={<Pagina1 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

// Exportación del componente App para su uso en otras partes de la aplicación
export default App;
