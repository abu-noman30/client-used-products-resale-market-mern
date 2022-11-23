import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Routers/Router';

function App() {
	return (
		<div className='App'>
			<Toaster position='top-center' reverseOrder={false} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
