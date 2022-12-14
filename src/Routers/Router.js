import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../Layouts/DashboardLayout/DashboardLayout';
import Root from '../Layouts/Root/Root';
import AvailableCars from '../Pages/AvailableCars/AvailableCars';
import Blog from '../Pages/Blog/Blog';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Dashboard from '../Pages/Others/DashBoard/DashBoard';
import AllBuyers from '../Pages/Others/DashboardPages/AdminPages/AllBuyers/AllBuyers';
import AllSellers from '../Pages/Others/DashboardPages/AdminPages/AllSellers/AllSellers';
import ReportedItems from '../Pages/Others/DashboardPages/AdminPages/ReportedItems/ReportedItems';
import MyOrders from '../Pages/Others/DashboardPages/BuyerPages/MyOrders/MyOrders';
import Payment from '../Pages/Others/DashboardPages/BuyerPages/Payment/Payment';
import AddProduct from '../Pages/Others/DashboardPages/SellerPages/AddProduct/AddProduct';
import MyProducts from '../Pages/Others/DashboardPages/SellerPages/MyProducts/MyProducts';
import Register from '../Pages/Register/Register';
import PrivateRouter from './Private/PrivateRouter';

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
				element: (
					<PrivateRouter>
						<AvailableCars />
					</PrivateRouter>
				),
				loader: async ({ params }) => {
					return await fetch(`https://server-used-car-bazar-mern.vercel.app/category/${params.id}`);
				}
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			},
			{
				path: 'blog',
				element: <Blog />
			}
		]
	},
	{
		path: 'dashboard',
		element: <DashboardLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />
			},
			{
				path: 'add-product',
				element: <AddProduct />
			},
			{
				path: 'my-products',
				element: <MyProducts />
			},
			{
				path: 'all-sellers',
				element: <AllSellers />
			},
			{
				path: 'all-buyers',
				element: <AllBuyers />
			},
			{
				path: 'my-orders',
				element: <MyOrders />
			},
			{
				path: 'my-orders/payment/:id',
				element: <Payment />,
				loader: async ({ params }) => {
					return await fetch(`https://server-used-car-bazar-mern.vercel.app/booking/${params.id}`);
				}
			},
			{
				path: 'reported-items',
				element: <ReportedItems />
			}
		]
	}
]);
export default router;
