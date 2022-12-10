import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Router';

function App() {
  return (
    <div className='bg-black min-h-screen text-white '>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
