import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='min-h-screen text-white p-5'>
      <RouterProvider router={route} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
