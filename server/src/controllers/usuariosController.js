const { request, response } = require('../app');
const connection = require('../models/connection');
const usuariosModel = require('../models/usuariosModel');

const getAll = async (req, res) => {
	const [usuarios] = await usuariosModel.getAll();

	return res.status(200).json(usuarios);
};
const retornaUsuario = async (req, res) => {
	const { id } = req.params;

	const [usuarios] = await usuariosModel.retornaUsuario(id);

	return res.status(200).json(usuarios);
};

const createUsuario = async (req, res) => {
	const createdUsuario = await usuariosModel.createUsuario(req.body);
	return res.status(201).json(createdUsuario);
};

const deleteUsuario = async (req, res) => {
	const { id } = req.params;

	console.log(id);
	try {
		if (id != null) await usuariosModel.deleteUsuario(id);
		return res.status(200).json({ message: 'Usuario deletado' });
	} catch (error) {
		console.log(error);
	}
};

const updateUsuario = async (req, res) => {
	const { id } = req.params;

	await usuariosModel.updateUsuario(id, req.body);
	return res.status(204).json({ message: 'Usuario alterado' });
};

module.exports = {
	getAll,
	createUsuario,
	deleteUsuario,
	updateUsuario,
	retornaUsuario,
};
