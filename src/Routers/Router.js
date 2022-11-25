import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Root from '../Layouts/Root/Root';
import AvailableCars from '../Pages/AvailableCars/AvailableCars';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'category/:id',
				element: <AvailableCars />,
				loader: async ({ params }) => {
					return await fetch(`http://localhost:5000/category/${params.id}`);
				}
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	},
	{
		path: 'dashboard',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				// element: <Dashboard />
			},
			{
				path:'my-orders',
			},
		]
	}
]);
export default router;
