import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Painel from './routes/produtos-painel/Painel.jsx';
import Login from './routes/login/Login.jsx';
import Registro from './routes/usuario-registro/Registro.jsx';
import CriarProduto from './routes/produto-criar/Criar-produto.jsx';
import EditarProduto from './routes/produto-editar/Edicao.jsx';
import PainelUsuarios from './routes/usuario-painel/Painel-usuarios.jsx';
import EditarUsuario from './routes/usuario-editar/Editar-usuario.jsx';

//
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Login />,
			},
			{
				path: 'registro',
				element: <Registro />,
			},
			{
				path: 'produtos',
				element: <Painel />,
			},
			{
				path: 'novoProduto',
				element: <CriarProduto />,
			},
			{
				path: 'editarProduto/:id',
				element: <EditarProduto />,
			},
			{
				path: 'usuarios',
				element: <PainelUsuarios />,
			},
			{
				path: 'editarUsuario/:id',
				element: <EditarUsuario />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
