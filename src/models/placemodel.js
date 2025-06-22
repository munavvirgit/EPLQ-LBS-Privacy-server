import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String, // e.g., Hospital, School, etc.
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  encryptedCoords: {
    lat: {
      type: String,
      required: true,
    },
    lng: {
      type: String,
      required: true,
    },
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [lng, lat]
      required: true,
      index: "2dsphere",
    },
  },
});

export const Place = mongoose.model("Place", placeSchema);
