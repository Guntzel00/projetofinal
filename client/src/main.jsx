import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Painel from './routes/painel/Painel.jsx';
import Login from './routes/login/Login.jsx';
import Registro from './routes/registro/Registro.jsx';
import CriarProduto from './routes/criar-produto/Criar-produto.jsx';
import EditarProduto from './routes/editar/Edicao.jsx';

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
