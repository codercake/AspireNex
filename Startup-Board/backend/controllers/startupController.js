const { Startup } = require('../models');

const createStartup = async (req, res) => {
  try {
    const startup = new Startup(req.body);
    await startup.save();
    res.status(201).send(startup);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getStartups = async (req, res) => {
  try {
    const startups = await Startup.find().populate('founder');
    res.send(startups);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getStartupById = async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id).populate('founder');
    if (!startup) return res.status(404).send();
    res.send(startup);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!startup) return res.status(404).send();
    res.send(startup);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteStartup = async (req, res) => {
  try {
    const startup = await Startup.findByIdAndDelete(req.params.id);
    if (!startup) return res.status(404).send();
    res.send(startup);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createStartup, getStartups, getStartupById, updateStartup, deleteStartup };