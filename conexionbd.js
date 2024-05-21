const mysql = require('mysql');
const ExcelJS = require('exceljs');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'asp'
});

connection.connect((err) => {
    // Realizando una consulta a la tabla usuarios
    connection.query('SELECT * FROM usuarios', (error, results, fields) => {
        if (error) {
            console.error('Error al realizar la consulta: ', error);
        } else {
            // Crear un archivo excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Usuarios');

            // Agregar encabezados de columnas
            const columns = [];
            fields.forEach(field => {
                columns.push({ header: field.name, key: field.name, width: 15 });
            });
            worksheet.columns = columns;

            // Agregar filas con los datos de la consulta
            results.forEach(row => {
                worksheet.addRow(row);
            });

            // Guardar el archivo excel
            workbook.xlsx.writeFile('usuarios.xlsx')
                .then(() => {
                    console.log('Datos de usuarios exportados a usuarios.xlsx');
                })
                .catch(err => {
                    console.error('Error al exportar datos a excel: ', err);
                });
        }

        // Cierra la conexión después de realizar la consulta
        connection.end();
    });
});
