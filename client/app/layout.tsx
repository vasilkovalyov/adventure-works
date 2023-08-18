import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Container>
            <Grid container>
              <Grid item md={4}>
                App
              </Grid>
              <Grid item md={8}></Grid>
            </Grid>
          </Container>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}