import './App.css'
import { Route, Routes} from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'

function App() {


  return (

    <Routes>
      <Route element={<Layout />} >
        <Route index exact element={<HomePage />} />
        <Route exact path={"/cart"} element={<CartPage />} />
      </Route>
    </Routes>
  )
}

export default App

