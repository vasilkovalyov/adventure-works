import Link from 'next/link';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProductCardProps extends Partial<IProduct> {
  className?: string;
}

export default function ProductCard({
  ProductID,
  Name,
  Category,
  Color,
  Cost,
  Description,
  Model,
}: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={`/products/${Category}/${ProductID}`}>
            {Name} - {Color}
          </Link>
        </Typography>
        <Box marginBottom={2}>
          <Typography marginBottom={0} variant="body2" color="text.secondary">
            Category: {Category}
          </Typography>
          <Typography marginBottom={0} variant="body2" color="text.secondary">
            Model: {Model}
          </Typography>
          <Typography marginBottom={0} variant="body2" color="text.secondary">
            Color: {Color}
          </Typography>
        </Box>
        {Description ? (
          <Typography marginBottom={1} variant="body2" color="text.secondary">
            {Description}
          </Typography>
        ) : null}
        <Typography marginBottom={2}>{Cost?.toFixed(2)} $</Typography>
        <Link href={`/products/${Category}/${ProductID}`}>More</Link>
      </CardContent>
    </Card>
  );
}
