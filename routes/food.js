// routes/food.js
const express = require('express');
const FoodListing = require('../models/FoodListing');
const router = express.Router();

// Add a food listing
router.post('/', async (req, res) => {
  const { userId, title, description, location, availableUntil } = req.body;
  try {
    const foodListing = await FoodListing.create({ userId, title, description, location, availableUntil });
    res.status(201).json(foodListing);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add food listing' });
  }
});

// Get all food listings
router.get('/', async (req, res) => {
  try {
    const foodListings = await FoodListing.findAll();
    res.json(foodListings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve food listings' });
  }
});

module.exports = router;
