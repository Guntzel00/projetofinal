import './painel.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';

export default function Painel() {
	const [produtos, setProdutos] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get('/produtos');

				// Desestruturando os dados da API
				const { data } = response;

				// Armazenando os dados no estado local
				setProdutos(data);
			} catch (error) {
				console.error('Erro ao buscar dados dod produtos', error);
			}
		};

		fetchData();
	}, []);

	const deletarProduto = async (id) => {
		try {
			// Substitua 'sua_url_api' pela URL real da sua API
			await api.delete(`/produtos/${id}`);
			// Atualiza a lista de produtos após a exclusão
			setProdutos(produtos.filter((produto) => produto.id !== id));
		} catch (error) {
			console.error('Erro ao excluir produto:', error);
		}
	};

	return (
		<>
			<div className='conatiner'>
				<div className='painel'>
					<h1>Tabela de produtos</h1>

					{produtos.map((produto) => (
						<div key={produto.id} className='produto'>
							<div className='detalhes'>
								<p>Nome: {produto.nome}</p>
								<p>Valor: R${produto.preco}</p>
								<p>Marca: {produto.marca}</p>
							</div>
							<div className='icons'>
								<button onClick={() => deletarProduto(produto.id)}>
									<img
										src='../../public/assets/icons8-remover-48.png'
										alt='ícone de lixeira'
									/>
								</button>
								<button
									onClick={() => navigate(`/editarProduto/${produto.id}`)}
								>
									<img
										src='../../public/assets/icons8-editar-50.png'
										alt='ícone de edição'
									/>
								</button>
							</div>
						</div>
					))}
					<p className='button'>
						<Link to={'/novoProduto'}>Cadastrar produto</Link>
					</p>
					<p className='button'>
						<Link to={'/usuarios'}>Usuários</Link>
					</p>
				</div>
				<Link id='logout' to={'/'}>
					Logout
				</Link>
			</div>
		</>
	);
}
