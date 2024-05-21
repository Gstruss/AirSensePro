const mysql = require('mysql');
const XLSX = require('xlsx');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'asp'
});

connection.connect();

const query = 'SELECT * FROM usuarios';

connection.query(query, (error, results, fields) => {
  if (error) throw error;

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(results);
  
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  XLSX.writeFile(wb, 'reporte.xlsx');
  console.log('Reporte generado exitosamente.');
});

connection.end();