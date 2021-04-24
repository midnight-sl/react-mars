import React, { useState } from 'react';
import { Typography, CssBaseline, Container, Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { loadPhotos } from '../api'
import PhotosAlbum from './PhotosAlbum';
import roverCameras from '../helpers/roverCameras'
import useStyles from '../styles/styles';



export default function PhotoOptionsChoise() {

  const [roverName, setRoverName] = useState("");
  const [camName, setCamName] = useState("");
  const [sol, setSol] = useState(0);
  const [page, setPage] = useState(1);
  const [roverPhotos, setRoverPhotos] = useState(null);

  const classes = useStyles();


  const handleLoad = async () => {
    const photosResult = await loadPhotos({ roverName, camName, page, sol });
    if (photosResult){
      setRoverPhotos(photosResult.photos);
    }
  }

  const handleLoadMore = (roverName, camName, page, sol) => {
    setPage(page++);
    handleLoad(roverName, camName, page, sol);
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" justify="center" >
        <Typography variant="h5">In order to check the photos, please, choose the specifications bellow</Typography>

        <Box>
          <Typography variant="h6">1. Choose rover name first:</Typography>
          <FormControl >
            <InputLabel id="rover-select-label">Rover</InputLabel>
            <Select
              className={classes.select}
              labelId="rover-select-label"
              id="rover-select"
              value={roverName}
              onChange={e => setRoverName(e?.target?.value)}
            > 
              {roverCameras.map(rover => <MenuItem key={rover.id} value={rover.id}>{rover.nameToDisplay}</MenuItem>)}
            </Select>
          </FormControl>

          <Typography variant="h6">2. Choose specific camera name :</Typography>
          <FormControl >
            <InputLabel id="camera-select-label">Camera</InputLabel>
            <Select
              className={classes.select}
              labelId="camera-select-label"
              id="camera-select"
              value={camName}
              onChange={e => setCamName(e.target.value)}
              disabled={!roverName}
            >
              {roverName && roverCameras.find(r => r.id === roverName)?.availableCameras.map(camera =>
                <MenuItem key={camera.id} value={camera.id}>{camera.name}</MenuItem>)}
            </Select>
          </FormControl>

          <Typography variant="h6">3. Input Sol(Mars Day), that you are interested in:</Typography>
          <form noValidate autoComplete="off">
            <TextField required
              id="standard-number"
              label="Number"
              type="number"
              value={sol}
              onChange={e => setSol(e?.target?.value)}
              InputLabelProps={{
                shrink: true,
              }}
          />
          </form>
        </Box>

        <Typography variant="h6">The photos for {capitalizeFirstLetter(roverName)} rover's camera {camName} on {sol} Mars day will be shown below</Typography>

        <Box className={classes.buttonBox}>
          <Button variant="contained" color="primary" onClick={handleLoad}>
            Load photos
          </Button>
          <Button variant="contained" color="primary">
            Load more...
          </Button>
        </Box>
      </Container>
      <PhotosAlbum roverPhotos={roverPhotos}/>

    </>
  )
}

