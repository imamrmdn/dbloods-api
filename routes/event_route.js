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

//getby id
router.get("/event/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: "event tidak ditemukan " });
      return;
    }

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

//put
router.put("/event/:id", async (req, res) => {
  const { id } = req.params;
  const { title, alamat, gambar, deskripsi } = req.body;

  try {
    const event = await Event.findById(id);
    if (!event) {
      res.status(404).json({ message: "event tidak ditemukan " });
      return;
    }
    event.title = title;
    event.alamat = alamat;
    event.gambar = gambar;
    event.deskripsi = deskripsi;
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//delete
router.delete("/event/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      res.status(404).json({ message: "event tidak ditemukan " });
      return;
    }

    res.json({ message: "berhasil menghapus event" });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
