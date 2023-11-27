import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql
	.createPool({
		host: process.env.MYQSL_HOST,
		user: process.env.MYQSL_USER,
		password: process.env.MYQSL_PASSWORD,
		database: process.env.MYQSL_DATABASE,
	})
	.promise();

async function getUsuarios() {
	const [rows] = await pool.query('SELECT * FROM usuarios');
	return rows;
}
const usuarios = await getUsuarios();
console.log(usuarios);
