'use client';
import { useEffect, useState } from 'react';
import api from '@/api/api';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import ProductCard from '@/components/ProductCard/product-card';

export default function BlockProducts() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function loadProducts() {
    try {
      const response = await api().get('/products');
      setProducts(response.data.products[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);
  console.log(products);

  return (
    <Box component="section" className="block-products" py={4}>
      <Container>
        <Typography variant="h4" marginBottom={2}>
          Products
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container columnSpacing={4} rowSpacing={4}>
            {products.length &&
              products.map((product) => (
                <Grid
                  item
                  key={product.ProductID}
                  marginBottom={2}
                  xs={12}
                  sm={6}
                  md={4}
                  display="flex"
                >
                  <ProductCard {...product} />
                </Grid>
              ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
