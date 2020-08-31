const router = require("express").Router();

const Event = require("../models/event_model");

//get
router.get("/event", async (req, res) => {
  try {
    const event = await Event.find();

    res.json(event);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//post
router.post("/event", async (req, res) => {
  const { title, alamat, gambar, deskripsi } = req.body;

  try {
    const event = await Event.create({
      title,
      alamat,
      gambar,
      deskripsi,
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
