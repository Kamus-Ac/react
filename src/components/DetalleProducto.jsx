import { useParams, Link } from 'react-router-dom';
import { misProductos } from '../data/productos';
import '../styles/DetalleProducto.css';

function DetalleProducto() {
  const { id } = useParams();

  const producto = misProductos.find((item) => item.id === id);

  if (!producto) {
    return <div className="detalle-container"><h2 className="error-message">El producto no existe.</h2></div>;
  }

  return (
    <div className="pro">
      <div className="detalle-card">
        <h1 className="detalle-nombre">{producto.nombre}</h1>
        <div className="detalle-content">
          <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />
          <div className="detalle-item">
            <span className="detalle-label">Precio:</span>
            <p className="detalle-precio">{producto.precio}</p>
          </div>
          <div className="detalle-item">
            <span className="detalle-label">Descripción:</span>
            <p className="detalle-desc">{producto.desc}</p>
          </div>
        </div>
        <Link to="/" className="btn-volver">← Volver al catálogo</Link>
      </div>
    </div>
  );
}

export default DetalleProducto;
