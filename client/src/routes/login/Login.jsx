import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate();
	const login = async (e) => {
		e.preventDefault();

		try {
			console.log('Usuário Logado');
			navigate('/produtos');
		} catch (error) {
			console.error('Erro ao logar', error);
		}
	};
	return (
		<>
			<div className='container'>
				<form onSubmit={login} className='form'>
					<h1>Realize seu login</h1>
					<div className='campos'>
						<label>
							<p>Email:</p>
							<input type='text' name='email' id='email' />
						</label>
						<label>
							<p>Senha:</p>
							<input type='password' name='password' id='password' />
						</label>
					</div>
					<button type='submit'>Login</button>
					<span>
						Não possui conta? <Link to={'./registro'}>Clique aqui.</Link>
					</span>
				</form>
			</div>
		</>
	);
}
