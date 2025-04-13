const mysql = require('mysql2');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root', // o el usuario de tu MySQL
  password: 'Guitarrayo77!', // tu contraseña
  database: 'usuarios'
});

conexion.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err.stack);
    return;
  }
  console.log('Conectado a MySQL ✅', conexion.threadId);
});

module.exports = conexion;
