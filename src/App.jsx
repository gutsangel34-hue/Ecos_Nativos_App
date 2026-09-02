import { useState } from 'react';
import './App.css'; // Importante para cargar los estilos

function App() {
  const [texto, setTexto] = useState('');
  const [contador, setContador] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado: "${texto}"`);
  };

  return (
    <div className="app-container">
      <h1>Manejo de Eventos en React</h1>

      {/* Sección Clic */}
      <section>
        <h2>1. Evento Clic (onClick)</h2>
        <p>Contador: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button className="btn-reset" onClick={() => setContador(0)}>Reiniciar</button>
      </section>

      <hr />

      {/* Sección Formulario */}
      <section>
        <h2>2 y 3. Eventos Input (onChange) y Form (onSubmit)</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Escribe algo..." 
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button type="submit" style={{ marginLeft: '10px' }}>Enviar</button>
        </form>
        <p>Texto en vivo: <em>{texto}</em></p>
      </section>

      <hr />

      {/* Sección Mouse Hover */}
      <section>
        <h2>4. Evento de Mouse (Hover con CSS)</h2>
        <div className="tarjeta-mouse">
          Pasa el cursor por aquí
        </div>
      </section>
    </div>
  );
}

export default App;