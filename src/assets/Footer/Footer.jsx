import { GitHub, LinkedIn } from '@mui/icons-material';
import { AppBar, Container, Fab, Grid, Link, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer >
      <Container maxWidth="lg" sx={{pt: 6}}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, pt: 2}}>
                {`Juan Serrano © ${new Date().getFullYear()} - eCommerce para CoderHouse`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="inherit">
                  <Link href="https://github.com/juaniserrano" color="inherit">
                    <Fab size="small" color="default" aria-label="add" sx={{m:2}}>
                      <GitHub />
                    </Fab>
                  </Link>
                  <Link href="https://www.linkedin.com/in/juan-ignacio-serrano-luna/" color="inherit">
                    <Fab size="small" color="default" aria-label="add" sx={{m:2}}>
                      <LinkedIn />
                    </Fab>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
    </footer>
  );
};
export default Footer;
