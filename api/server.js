const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const FILE_PATH = './eventos.json';

// Obtener todos los eventos
app.get('/eventos', (req, res) => {
  const eventos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
  res.json(eventos);
});

// Crear nuevo evento
app.post('/eventos', (req, res) => {
  const nuevo = req.body;
  const eventos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
  eventos.push(nuevo);
  fs.writeFileSync(FILE_PATH, JSON.stringify(eventos, null, 2));
  res.json({ mensaje: 'Evento creado', evento: nuevo });
});

// Editar un evento
app.put('/eventos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const nuevosDatos = req.body;
  let eventos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
  eventos = eventos.map(e => e.nombre === nombre ? { ...e, ...nuevosDatos } : e);
  fs.writeFileSync(FILE_PATH, JSON.stringify(eventos, null, 2));
  res.json({ mensaje: 'Evento actualizado' });
});

// Eliminar un evento
app.delete('/eventos/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  let eventos = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
  eventos = eventos.filter(e => e.nombre !== nombre);
  fs.writeFileSync(FILE_PATH, JSON.stringify(eventos, null, 2));
  res.json({ mensaje: 'Evento eliminado' });
});

app.listen(PORT, () => {
  console.log(`✅ API corriendo en http://localhost:${PORT}`);
});
