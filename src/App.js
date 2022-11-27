import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
