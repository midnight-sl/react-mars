import React, { us } from 'react';
import { Typography, CssBaseline, Container, Grid, Card, CardContent, CardMedia } from '@material-ui/core';

import useStyles from '../styles/styles';

const PhotosAlbum = (props) => {
  const classes = useStyles();
  const photos = props.roverPhotos;

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
            {photos?.map((photo) => (
              <Grid item key={photo.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    image={photo.img_src}
                  />
                </Card>
              </Grid>
            ))}

          </Grid>
      </Container>
    </>
    )
  }
  
  export default PhotosAlbum;