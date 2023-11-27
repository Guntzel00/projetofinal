import './criar-produto.css';
import { useState } from 'react';
import api from '../../api/api';
import { Link } from 'react-router-dom';

export default function CriarProduto() {
	const [nome, setNome] = useState('');
	const [preco, setPreco] = useState('');
	const [marca, setMarca] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await api.post('/produtos', {
				nome,
				preco,
				marca,
			});

			console.log('Produto adicionado:', response.data);

			// Limpar os campos após o envio bem-sucedido
			setNome('');
			setPreco('');
			setMarca('');
		} catch (error) {
			console.error('Erro ao adicionar produto:', error);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='form'>
					<h1>Cadastrar Produto</h1>
					<form onSubmit={handleSubmit}>
						<div className='campos'>
							<label>
								<p>Nome:</p>
								<input
									type='text'
									name='nome'
									id='nomeProduto'
									value={nome}
									onChange={(e) => setNome(e.target.value)}
								/>
							</label>
							<label>
								<p>Preço:</p>
								<input
									type='number'
									name='preco'
									id='precoProduto'
									value={preco}
									onChange={(e) => setPreco(e.target.value)}
								/>
							</label>
							<label>
								<p>Marca:</p>
								<input
									type='text'
									name='marca'
									id='marcaProduto'
									value={marca}
									onChange={(e) => setMarca(e.target.value)}
								/>
							</label>
						</div>
						<button type='submit'>Cadastrar</button>
					</form>
					<Link to={'/produtos'}> Voltar</Link>
				</div>
			</div>
		</>
	);
}
