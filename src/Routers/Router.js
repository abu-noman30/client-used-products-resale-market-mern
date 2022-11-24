import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

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
			}
		]
	}
]);
export default router;
