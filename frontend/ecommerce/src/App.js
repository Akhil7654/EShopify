import React from 'react'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen'
import SignupScreen from './components/screens/SignupScreen'
import CartScreen from './components/screens/CartScreen'
import ProductScreen from './components/screens/ProductScreen'

function App() {
  return (
    <>
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/login' element={<LoginScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/signup' element={<SignupScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/cart/:slug?' element={<CartScreen/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/product/:slug' element={<ProductScreen/>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App