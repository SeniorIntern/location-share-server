import { Router } from 'express';
import CreateLocationDto from '../dtos/create-location';
import Location from '../models/location';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();

    // Map the locations array to transform the date format
    const formattedLocations = locations.map(location => ({
      _id: location._id,
      latitude: location.latitude,
      longitude: location.longitude,
      date: new Date(location.date).toLocaleDateString(),
    }));

    res.status(200).send(formattedLocations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

router.post('/', async (req, res) => {
  const { latitude, longitude } = req.body as CreateLocationDto;
  const location = await Location.create({
    latitude, longitude
  })
  await location.save()
  res.json(location);
})

export default router;
