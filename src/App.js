import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Watch from './components/Watch';
import MainContainer from './components/MainContainer';

const appRouter=  createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children:[
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <Watch/>
    }
  ]
}])


function App() {
  return (
    <div className="App">
    <Header/>
    <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
