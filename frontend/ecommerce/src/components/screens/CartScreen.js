import React, { useEffect } from 'react';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/CartActions';

function CartScreen() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const productSlug = slug;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productSlug) {
      dispatch(addToCart(productSlug, qty));
    }
  }, [dispatch, productSlug, qty]);

  const removeFromCartHandler = slug => {
    dispatch(removeFromCart(slug));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Container>
      <h1 className="my-4">Your Cart</h1>
      {cartItems.length === 0 ? (
    <div className="my-4 text-center"> {/* Added text-center class */}
    <p><strong>Your Eshopify Cart is empty.</strong></p>
    <Link to='/' className="btn btn-primary">Go Back to Shop</Link>
  </div>
      ) : (
        <ListGroup variant='flush'>
          {cartItems.map(item => (
            <ListGroup.Item key={item.product} className="py-3">
              <Row className="align-items-center">
                <Col xs={3} md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col xs={5} md={3}>
                  <Link to={`/product/${item.product}`} className="text-dark">{item.name}</Link>
                </Col>
                <Col xs={4} md={2}>
                  Rs. {item.price}
                </Col>
                <Col xs={4} md={2}>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col xs={1} md={2}>
                  <Button variant='light' onClick={() => removeFromCartHandler(item.product)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
              <Row className="align-items-center mt-2">
                <Col>
                  <strong>Total Price:</strong> <span className="font-weight-bold">Rs. {item.price * item.qty}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {cartItems.length > 0 && ( // Conditionally render the button
        <Row className="mt-4">
          <Col>
            <Button onClick={checkoutHandler} className="btn btn-primary">Proceed to Checkout</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default CartScreen;
