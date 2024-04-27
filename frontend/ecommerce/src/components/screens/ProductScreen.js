import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate,useLocation } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Container } from 'react-bootstrap';
import Rating from '../Rating';
import { ListProductDetail } from '../../actions/ProductsActions';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../Loader';
import Message from '../Message';


function ProductScreen() {
  const { slug } = useParams();
  
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { error, loading, product } = productDetail;
  const [qty, setQty] = useState(1);

  const navigate=useNavigate()
  const location=useLocation()

  useEffect(() => {
    dispatch(ListProductDetail(slug));
  }, [dispatch, slug]);

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const increaseQty = () => {
    if (qty < product.product_stock) {
      setQty(qty + 1);
    }
  };

   const addToCartHandler = () => {
    navigate(`/cart/${slug}?qty=${qty}`)
   }

  return (
    <Container className="mt-5">
      

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.product_image} alt={product.product_name} fluid />
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  <h3>{product.product_name}</h3>
                </Card.Title>
                <Card.Text>
                  <Rating
                    value={product.product_rating}
                    text={`${product.product_numreviews} reviews`}
                    color={'#f8e825'}
                  />
                </Card.Text>
                <Card.Text>
                  <b>Brand:</b> {product.product_brand}
                </Card.Text>
                <Card.Text>
                  <b>Description:</b> {product.product_info}
                </Card.Text>
                <Card.Text>
                  <b>Price:</b> <strong>{product.product_price} Rs</strong>
                </Card.Text>
                <Card.Text>
                  <b>Status:</b> {product.product_stock > 0 ? 'In Stock' : 'Sorry, Out of Stock'}
                </Card.Text>

                {product.product_stock > 0 && (
                  <Card.Text>
                    <b>Qty:  </b>

                    <span>{qty}</span>{' '}
             
                    <Button variant="outline-secondary" onClick={decreaseQty}>-</Button>{' '}
                    
                    <Button variant="outline-secondary" onClick={increaseQty}>+</Button>
                  </Card.Text>
                )}

                <Button
                  className='btn-block mt-3'
                  disabled={product.product_stock === 0}
                  type='button'
                  variant='success'
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductScreen;
