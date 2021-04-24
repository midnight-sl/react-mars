const express = require('express');
const router = express.Router();
const axios = require('axios');

const key = "JBMwxmE8SIJWjRTfEU5ckCtQx8knDFcMqjBMVRw9";

router.post('/load-photos', loadRoverPhotos);

async function loadRoverPhotos (req,res) {
  const { roverName, camName, page, sol } = req.body;

  const camToCheck = camName ? `&camera=${camName}` : '';
  const pageToCheck = page ? `&page=${page}` : '';
  const linkToFollow = `${roverName}/photos?sol=${sol}${camToCheck}${pageToCheck}&api_key=${key}`

  const getRoverPhotos = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${linkToFollow}`);

  if (getRoverPhotos) {
    res.send(getRoverPhotos.data)
  } else {
    res.status(404).send('Request failed! Something went wrong!');
  }
}

module.exports = router;

