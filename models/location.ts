import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  latitude: {
    type: String,
    required: true
  },
  longitude: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Location = mongoose.model('location', locationSchema);

export default Location;
