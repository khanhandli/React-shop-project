import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Banner from '../Banner';
import Product from '../Product';

const Products = ({ products, addProduct }) => {
    return (
        <div>
            <Banner />
            <Container id="products">
                <Grid container spacing={4}>
                    {products.map((product) => {
                        return (
                            <Grid key={product.id} item xs={12} sm={6} md={4}>
                                <Product product={product} addProduct={addProduct} />
                            </Grid>
                        )
                    })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default Products;