const connection = require('./connection');

const getAll = async () => {
	const produtos = await connection.execute('SELECT * FROM produtos');

	return produtos;
};

const retornaProduto = async (id) => {
	const [produto] = await connection.execute(
		'SELECT * FROM produtos WHERE id = ?',
		[id]
	);

	return produto;
};

const createProduto = async (produto) => {
	const { nome, preco, marca } = produto;

	const [createdProduto] = await connection.execute(
		`INSERT INTO produtos(nome, preco, marca) VALUES('${nome}', '${preco}', '${marca}')`
	);

	return createdProduto;
};

const deleteProduto = async (id) => {
	const deletedProduto = await connection.execute(
		'DELETE FROM produtos WHERE id = ?',
		[id]
	);

	return deletedProduto;
};
const updateProduto = async (id, produto) => {
	try {
		const { nome, preco, marca } = produto;

		const [updatedProduto] = await connection.execute(
			'UPDATE produtos SET nome = ?, preco = ?, marca = ? WHERE id = ?',
			[nome, preco, marca, id]
		);

		if (updatedProduto.affectedRows > 0) {
			// Atualização bem-sucedida
			return { success: true, message: 'Produto atualizado com sucesso.' };
		} else {
			// Nenhum usuário foi atualizado, pode indicar que o ID não foi encontrado
			return {
				success: false,
				message: 'Produto não encontrado para atualização.',
			};
		}
	} catch (error) {
		// Lidar com erros durante a atualização
		console.error('Erro ao atualizar Produto:', error);
		return { success: false, message: 'Erro ao atualizar Produto.' };
	}
};

module.exports = {
	getAll,
	createProduto,
	deleteProduto,
	updateProduto,
	retornaProduto,
};
