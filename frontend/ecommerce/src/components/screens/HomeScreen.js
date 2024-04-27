import React, { useEffect} from 'react'
import {Container} from 'react-bootstrap'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Product from '../Product'
import { ListProducts } from '../../actions/ProductsActions'
import { useDispatch,useSelector } from "react-redux";
import Loader from '../Loader'
import Message from '../Message'


function HomeScreen() {
  const dispatch=useDispatch()
  const productsList=useSelector((state)=>state.productsList);
  const {error,loading,products}=productsList
  
  useEffect(()=> {
    dispatch(ListProducts())
  },[dispatch])


  return (
   <Container>
    <br></br>
    <h1>
        All Products
    </h1>
    
    {
        loading?(
          <Loader></Loader>
        ):error?(
            <Message>{error}</Message>
        ):(
        <Row>
            {products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                 <Product product={product}></Product>
                
                </Col>
            ))}
        </Row>
        )
    }

   </Container>
  )
}

export default HomeScreen