const router = require("express").Router();

const Edukasi = require("../models/edukasi_model");

//get
router.get("/edukasi", async (req, res) => {
  try {
    const edukasi = await Edukasi.find();

    res.json(edukasi);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//get by id
router.get("/edukasi/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const edukasi = await Edukasi.findById(id);
    if (!edukasi) {
      res.status(400).json({ message: "edukasi donor darah tidak ditemukan" });
      return;
    }
    res.json(edukasi);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//post
router.post("/edukasi", async (req, res) => {
  const { title, penulis, gambar, deskripsi, createdAt } = req.body;

  try {
    const edukasi = await Edukasi.create({
      title,
      penulis,
      gambar,
      deskripsi,
      createdAt,
    });

    res.status(201).json(edukasi);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//put

//delete

module.exports = router;
