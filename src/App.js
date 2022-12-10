import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './Route/Router';

function App() {
  return (
    <div className='min-h-screen text-white p-5'>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
