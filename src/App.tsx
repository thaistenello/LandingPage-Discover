import { ThemeProvider, Typography, Grid, Button } from "@mui/material";
import Theme from "./themes/ThemeProvider";
import {imageLeft, imageRight, image1, image2, image3} from './assets/images/images';
import './App.css';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Grid container
        sx={{
          marginLeft: {
            xs: '1rem', 
            sm: 'auto',
          },
          marginRight: {
            xs: '1rem', 
            sm: 'auto',
          },
          width:'95%',
          justifyContent: 'center' 
        }}>

          <Grid item xs={12} sm={8} md={5} lg={4} xl={3}
          sx={{
            marginTop: '8.56rem',
            marginRight:{
              xs: 0,
              sm: 0,
              // md: '3rem',
              lg:0
            }
          }}>
      
            <Typography variant="h1" gutterBottom>
              Discover the<br/>
              beauty around<br/>
              the world
            </Typography>

            <Typography variant="body1" paragraph
            sx={{ 
              height: '7.75rem', 
              marginTop: '1.5rem' 
            }}>
              Lorem ipsum dolor sit amet,<br/>
              consectetur adipiscing elit.<br/>
              Faucibus in libero risus semper<br/>
              habitant arcu.
            </Typography>

            <Button variant="contained" href="#" 
            sx={{ 
            textTransform: 'none', 
            fontSize: '1.12rem', 
            marginTop: {  
              xs: '4rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '1.5rem'
            }
            }}>
              Get started
            </Button>
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={3.8} xl={3}
          sx={{
            marginTop: {
              xs: '4rem',
              sm: '4rem',
              md: '9rem',
              lg: '4rem'
            }
            }}>

            <img src={imageLeft} alt="Leaves and rain image"/>    
          </Grid>

          <Grid item xs={12} sm={8} md={5} lg={4} xl={3} 
          sx={{
            marginTop: '9rem', 
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <img src={imageRight} alt="Coniferous forest"/>
          </Grid>
      </Grid>
      

      {/* Bottom Images */}
      <Grid container spacing={1}
      sx={{
        marginTop: '9rem', 
        marginBottom: '3rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%', 
        justifyContent: 'center'
      }}>

        {/* 01 */}
        <Grid item xs={12} sm={8} md={4} lg={4} xl={3}>
          <Typography variant="body2">
            01
          </Typography>
            <img src={image1} alt="Road through the coniferous forest image"/>
        </Grid>
        
        {/* 02 */}
        <Grid item xs={12} sm={8} md={4} lg={4} xl={3}>
          <Typography variant="body2">
            02
          </Typography>
            <img src={image2} alt="River through the coniferous forest image"/>
        </Grid>

        {/* 03 */}
        <Grid item xs={12} sm={8} md={4} lg={4} xl={3}>
          <Typography variant="body2">
            03
          </Typography>
            <img src={image3}alt="Field at sunset image"/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
