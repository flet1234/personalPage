import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Error from './components/Error'
import CV from './components/CV'
import './App.css'

import MainPage from './components/MainPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const Root = () => {
  
  return (
    <>
      <MainPage/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
  },{
    path:'/About',
    element:<About/>
  },{
    path:'/Projects',
    element:<Projects/>
  },{
    path:'/Contact',
    element:<Contact/>
  },{
    path:'/CV',
    element:<CV/>
  }
])



function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
