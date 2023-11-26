import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './edicao.css';

export default function EditarProduto() {
	const { id } = useParams(); // Obtém o parâmetro da URL
	const navigate = useNavigate();
	const [nome, setNome] = useState('');
	const [preco, setPreco] = useState('');
	const [marca, setMarca] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Substitua 'sua_url_api' pela URL real da sua API
				const response = await api.get(`/produtos/${id}`);
				const produto = response.data;

				console.log(produto);

				// Preenche os campos com os valores recuperados do produto
				setNome(produto.nome);
				setPreco(produto.preco);
				setMarca(produto.marca);
			} catch (error) {
				console.error('Erro ao buscar dados do produto', error);
			}
		};

		fetchData();
	}, [id]);

	const handleAtualizar = async () => {
		try {
			// Substitua 'sua_url_api' pela URL real da sua API
			await api.put(`/produtos/${id}`, { nome, preco, marca });

			// Adicione aqui a lógica para confirmar a atualização com o usuário, se necessário

			console.log('Produto atualizado com sucesso');
			navigate('/produtos');
		} catch (error) {
			console.error('Erro ao atualizar produto:', error);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='form'>
					<h1>Editar Produto</h1>
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
					<p className='cadastro'>
						<button onClick={handleAtualizar}>Atualizar</button>
					</p>
				</div>
			</div>
		</>
	);
}
