import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import DetalleProducto from './components/DetalleProducto';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
