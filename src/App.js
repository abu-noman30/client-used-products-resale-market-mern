import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';

function App() {
	//useEffect
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<div className='App'>
			<Toaster position='top-center' reverseOrder={false} />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
