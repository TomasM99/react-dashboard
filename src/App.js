import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='principal'>
        <div className='secundario'>
          <h1>Hola Matata</h1>
          <p>Soy un parrafor y me gujsta asdasd</p>
        </div>
        <div className='secundario'>
          <h1> Hola mono cai</h1>
          <p>Lolazo queria usar el lorem</p>
        </div>
        <div className='botones'>
          <button className='btn btn-success boton'>Comprar</button>
          <button className='btn btn-danger boton'>Vender</button>
          <button className='btn btn-outline-dark boton'>Borrar</button>
        </div>
      </div>
    </>
  );
}

export default App;
