import React, { useEffect, useState } from 'react';

export default function App() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/eventos')
      .then(res => res.json())
      .then(data => setEventos(data));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📊 Dashboard de EventPing</h1>
      <p>Eventos en tiempo real desde la API:</p>
      <ul>
        {eventos.map((evento, i) => (
          <li key={i}>
            <strong>{evento.nombre}</strong> – {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}
