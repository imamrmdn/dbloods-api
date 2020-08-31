const router = require("express").Router();

const Infromasi = require("../models/informasi_model");
const Informasi = require("../models/informasi_model");

//get all
router.get("/informasi", async (req, res) => {
  try {
    const informasi = await Infromasi.find();

    res.json(informasi);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//get by id
router.get("/informasi/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const informasi = await Informasi.findById(id);
    if (!informasi) {
      res.status(404).json({ message: "informasi tidak ditemukan " });
      return;
    }

    res.json(informasi);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//post
router.post("/informasi", async (req, res) => {
  const { title, url, sumber, gambar, deskripsi, tanggalDibuat } = req.body;

  try {
    const informasi = await Informasi.create({
      title,
      url,
      sumber,
      gambar,
      deskripsi,
      tanggalDibuat,
    });

    res.status(201).json({ message: "berhasil menambah informasi kesehatan" });
  } catch (error) {
    res.status(500).json({ err });
  }
});

//put

//delete

module.exports = router;
