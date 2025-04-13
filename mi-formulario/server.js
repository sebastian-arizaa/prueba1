const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir los HTML/CSS desde /public

app.post('/registro', (req, res) => {
  const { nombre, email, clave } = req.body;

  const sql = 'INSERT INTO registros (nombre, email, clave) VALUES (?, ?, ?)';
  db.query(sql, [nombre, email, clave], (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    } else {
      res.json({ mensaje: 'Registro exitoso 🎉' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
