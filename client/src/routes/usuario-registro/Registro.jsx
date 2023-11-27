import { useState } from 'react';
import api from '../../api/api';
import './registro.css';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Substitua 'sua_url_api' pela URL real da sua API
			const response = await api.post('/usuarios', {
				email,
				senha,
			});

			console.log('Usuário cadastrado:', response.data);

			// Limpar os campos após o envio bem-sucedido
			setEmail('');
			setSenha('');
		} catch (error) {
			console.error('Erro ao cadastrar usuário:', error);
		}
		navigate('/');
	};

	return (
		<>
			<div className='container'>
				<div className='form'>
					<h1>Cadastre-se</h1>
					<form onSubmit={handleSubmit}>
						<div className='campos'>
							<label>
								<p>Email:</p>
								<input
									type='text'
									name='email'
									id='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
							<label>
								<p>Senha:</p>
								<input
									type='password'
									name='senha'
									id='senha'
									value={senha}
									onChange={(e) => setSenha(e.target.value)}
								/>
							</label>
						</div>
						<p className='cadastro'>
							<button type='submit'>Cadastrar</button>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
