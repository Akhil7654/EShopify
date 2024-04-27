import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded' style={{ height: '580px' }}>
        <Link to={`/product/${product.slug}`}>
            <Card.Img src={product.product_image} style={{ height: '290px', objectFit: 'cover' }}></Card.Img>
        </Link>

        <Card.Body>
        <Link to={`/product/${product.slug}`}>
            <Card.Title as='h3'>
                <strong>{product.product_name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as='div'>
            <div className='my-3'>
                {product.product_rating} from {product.product_numreviews} reviews
            </div>
        </Card.Text>

        <Card.Text as='h6'>
               {product.product_price} Rs
        </Card.Text>

        <Rating
            value={product.product_rating}
            text={`${product.product_numreviews} reviews`}
            color={'#f8e825'}
        ></Rating>
        </Card.Body>
    </Card>
  )
}

export default Product