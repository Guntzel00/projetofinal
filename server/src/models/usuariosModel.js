const connection = require('./connection');

const getAll = async () => {
	const usuarios = await connection.execute('SELECT * FROM usuarios');

	return usuarios;
};

const retornaUsuario = async (id) => {
	const [usuario] = await connection.execute(
		'SELECT * FROM usuarios WHERE id = ?',
		[id]
	);

	return usuario;
};

const createUsuario = async (usuario) => {
	const { email, senha } = usuario;

	const [createdUsuario] = await connection.execute(
		`INSERT INTO usuarios(email, senha) VALUES('${email}', '${senha}')`
	);

	return createdUsuario;
};

const deleteUsuario = async (id) => {
	const deletedUsuario = await connection.execute(
		'DELETE FROM usuarios WHERE id = ?',
		[id]
	);

	return deletedUsuario;
};
const updateUsuario = async (id, usuario) => {
	try {
		const { email, senha } = usuario;

		const [updatedUsuario] = await connection.execute(
			'UPDATE usuarios SET email = ?, senha = ? WHERE id = ?',
			[email, senha, id]
		);

		if (updatedUsuario.affectedRows > 0) {
			// Atualização bem-sucedida
			return { success: true, message: 'Usuário atualizado com sucesso.' };
		} else {
			// Nenhum usuário foi atualizado, pode indicar que o ID não foi encontrado
			return {
				success: false,
				message: 'Usuário não encontrado para atualização.',
			};
		}
	} catch (error) {
		// Lidar com erros durante a atualização
		console.error('Erro ao atualizar usuário:', error);
		return { success: false, message: 'Erro ao atualizar usuário.' };
	}
};

module.exports = {
	getAll,
	createUsuario,
	deleteUsuario,
	updateUsuario,
	retornaUsuario,
};
