import { Link } from 'react-router-dom';
import { misProductos } from '../data/productos';
import '../styles/ListaProductos.css';
import { useState } from 'react';

function ListaProductos() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [usuarioAbierto, setUsuarioAbierto] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <div className="tienda">

      {/* ---HEADER--- */}
      
      <header className="header-tienda">

        {/* MENÚ HAMBURGUESA */}
        <div className="header-menu">
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            ☰
          </button>
        </div>

        {/* BUSCADOR */}
        <div className="header-buscador">
          <input
          type="text"
          placeholder="Search"
          />

          <button>
          🔍
          </button>
        </div>

        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
          NovaShop
          </Link>
        </div>

        {/* ACCIONES */}
        <div className="header-acciones">

          {/* MODO OSCURO */}
            <button
              onClick={() => setModoOscuro(!modoOscuro)}
            >
              {modoOscuro ? '☀️' : '🌙'}
            </button>

          {/* USUARIO */}
          <div className="usuario-container">
            <button
              onClick={() => setUsuarioAbierto(!usuarioAbierto)}
            >
              👤
            </button>

            {usuarioAbierto && (
            <div className="usuario-card">

              <h3>Mi cuenta</h3>

              <p>Usuario: Manuel</p>

              <button>
                Mi perfil
              </button>

              <button>
                Cerrar sesión
              </button>

            </div>
            )}
          </div>
        </div>

      </header>

      {/* MENÚ HAMBURGUESA */}
      {menuAbierto && (

        <div className="menu-hamburguesa">

          <nav>

            <Link to="/">
              Inicio
            </Link>

            <Link to="/">
              Favoritos
            </Link>

            <Link to="/">
              Contactanos
            </Link>

          </nav>

        </div>

      )}

      {/* CONTENIDO */}
      <main className="lista-container">

        <section className="catalogo-header">
          <div>
            <h2 className="catalogo-label">NUESTRA COLECCIÓN</h2>
            <p className="catalogo-subtitulo">
              Descubre nuestra selección de productos pensados para ti.
            </p>
          </div>

        </section>

        {/* PRODUCTOS */}
        <div className="productos-grid">
          {misProductos.map((prod, index) => (
            <article key={prod.id} className="producto-card">

              <div className="producto-imagen">
                <span className="producto-badge">
                  {index < 2 ? 'Nuevo' : 'Popular'}
                </span>

                <div>
                  <img src={prod.imagen} alt={prod.nombre} className="producto-placeholder-img" />
                </div>

                <button
                  className="btn-favorito"
                  aria-label="Agregar a favoritos"
                >
                  ♡
                </button>
              </div>

              <div className="producto-info">
                <span className="producto-categoria">
                  COLECCIÓN NOVA
                </span>

                <h2 className="producto-nombre">
                  {prod.nombre}
                </h2>

                <p className="producto-desc">
                  {prod.desc}
                </p>

                <div className="producto-footer">
                  <div>
                    <span className="precio-label">Precio</span>
                    <p className="producto-precio">
                      {prod.precio}
                    </p>
                  </div>

                  <Link
                    to={`/productos/${prod.id}`}
                    className="btn-ver-detalle"
                  >
                    Ver producto
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </main>

      {/* FOOTER */}
      <footer className="footer-tienda">
        <div>
          <strong>NovaShop</strong>
          <span>Calidad que puedes sentir.</span>
        </div>

        <p>© 2026 NovaShop. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default ListaProductos;