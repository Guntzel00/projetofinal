const { request, response } = require('../app');
const connection = require('../models/connection');
const produtosModel = require('../models/produtosModels');

const getAll = async (req, res) => {
	const [produtos] = await produtosModel.getAll();

	return res.status(200).json(produtos);
};
const retornaProduto = async (req, res) => {
	const { id } = req.params;

	const [produtos] = await produtosModel.retornaProduto(id);

	return res.status(200).json(produtos);
};

const createProduto = async (req, res) => {
	const createdProduto = await produtosModel.createProduto(req.body);
	return res.status(201).json(createdProduto);
};

const deleteProduto = async (req, res) => {
	const { id } = req.params;

	console.log(id);
	try {
		if (id != null) await produtosModel.deleteProduto(id);
		return res.status(200).json({ message: 'Produto deletado' });
	} catch (error) {
		console.log(error);
	}
};

const updateProduto = async (req, res) => {
	const { id } = req.params;

	await produtosModel.updateProduto(id, req.body);
	return res.status(204).json({ message: 'Produto alterado' });
};

module.exports = {
	getAll,
	retornaProduto,
	createProduto,
	deleteProduto,
	updateProduto,
};
