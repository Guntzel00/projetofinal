import '../produtos-painel/painel.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';

export default function PainelUsuarios() {
	const [usuarios, setUsuarios] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get('/usuarios');

				// Desestruturando os dados da API
				const { data } = response;

				// Armazenando os dados no estado local
				setUsuarios(data);
			} catch (error) {
				console.error('Erro ao buscar dados dos usuários', error);
			}
		};

		fetchData();
	}, []);

	const deletarUsuario = async (id) => {
		try {
			// Substitua 'sua_url_api' pela URL real da sua API
			await api.delete(`/usuarios/${id}`);
			// Atualiza a lista de produtos após a exclusão
			setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
		} catch (error) {
			console.error('Erro ao excluir produto:', error);
		}
	};

	return (
		<>
			<div className='conatiner'>
				<div className='painel'>
					<h1>Tabela de usuários</h1>

					{usuarios.map((usuario) => (
						<div key={usuario.id} className='produto'>
							<div className='detalhes'>
								<p>Email: {usuario.email}</p>
								<p>Senha: {usuario.senha}</p>
							</div>
							<div className='icons'>
								<button onClick={() => deletarUsuario(usuario.id)}>
									<img
										src='../../public/assets/icons8-remover-48.png'
										alt='ícone de lixeira'
									/>
								</button>
								<button
									onClick={() => navigate(`/editarUsuario/${usuario.id}`)}
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
						<Link to={'/produtos'}>Voltar</Link>
					</p>
				</div>
				<Link id='logout' to={'/'}>
					Logout
				</Link>
			</div>
		</>
	);
}
