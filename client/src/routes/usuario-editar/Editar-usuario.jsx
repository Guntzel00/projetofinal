import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import './edicao.css';

export default function EditarUsuario() {
	const { id } = useParams(); // Obtém o parâmetro da URL
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Substitua 'sua_url_api' pela URL real da sua API
				const response = await api.get(`/usuarios/${id}`);
				const usuario = response.data;

				console.log(usuario);

				// Preenche os campos com os valores recuperados do produto
				setEmail(usuario.email);
				setSenha(usuario.senha);
			} catch (error) {
				console.error('Erro ao buscar dados do usuário', error);
			}
		};

		fetchData();
	}, [id]);

	const handleAtualizar = async () => {
		try {
			// Substitua 'sua_url_api' pela URL real da sua API
			await api.put(`/usuarios/${id}`, { email, senha });

			// Adicione aqui a lógica para confirmar a atualização com o usuário, se necessário

			console.log('Usuario atualizado com sucesso');
			navigate('/usuarios');
		} catch (error) {
			console.error('Erro ao atualizar usuário:', error);
		}
	};

	return (
		<>
			<div className='container'>
				<div className='form'>
					<h1>Editar Usuário</h1>
					<div className='campos'>
						<label>
							<p>Email:</p>
							<input
								type='text'
								name='email'
								id='emailUsuario'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<label>
							<p>Senha:</p>
							<input
								type='text'
								name='senha'
								id='senhaUsuario'
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
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
