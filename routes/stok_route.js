const router = require("express").Router();

const Stok = require("../models/stokdarah_model");

//get
router.get("/stokdarah", async (req, res) => {
  try {
    const stok = await Stok.find();
    res.json(stok);
  } catch (err) {
    res.status(500).json({ err });
  }
});

//get by id
router.get("/stokdarah/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const stok = await Stok.findById(id);
    if (!stok) {
      res.status(404).json({ message: "rumah sakit tidak ditemukan" });
      return;
    }

    res.json(stok);
  } catch (error) {
    res.status(500).json({ err });
  }
});

//post
router.post("/stokdarah", async (req, res) => {
  const {
    nama_rs,
    alamat_rs,
    no_telp,
    gol_Apos,
    gol_Bpos,
    gol_Opos,
    gol_ABpos,
    gol_Aneg,
    gol_Bneg,
    gol_Oneg,
    gol_ABneg,
    updatedAt,
  } = req.body;

  try {
    const stok = await Stok.create({
      nama_rs,
      alamat_rs,
      no_telp,
      gol_Apos,
      gol_Bpos,
      gol_Opos,
      gol_ABpos,
      gol_Aneg,
      gol_Bneg,
      gol_Oneg,
      gol_ABneg,
      updatedAt,
    });

    res
      .status(201)
      .json({ message: "berhasil menambah stok darah dirumah sakit" });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//put
router.put("/stokdarah/:id", async (req, res) => {
  const { id } = req.params;
  const {
    nama_rs,
    alamat_rs,
    no_telp,
    gol_Apos,
    gol_Bpos,
    gol_Opos,
    gol_ABpos,
    gol_Aneg,
    gol_Bneg,
    gol_Oneg,
    gol_ABneg,
    updatedAt,
  } = req.body;

  try {
    const stok = await Stok.findById(id);
    if (!stok) {
      res.status(404).json({ message: "rumah sakit tidak ditemukan" });
      return;
    }
    stok.nama_rs = nama_rs;
    stok.alamat_rs = alamat_rs;
    stok.no_telp = no_telp;
    stok.gol_Apos = gol_Apos;
    stok.gol_Bpos = gol_Bpos;
    stok.gol_Opos = gol_Opos;
    stok.gol_ABpos = gol_ABpos;
    stok.gol_Aneg = gol_Aneg;
    stok.gol_Bneg = gol_Bneg;
    stok.gol_Oneg = gol_Oneg;
    stok.gol_ABneg = gol_ABneg;
    stok.updatedAt = updatedAt;
    await stok.save();
    res.json({ message: "berhasil mengupdate stok darah" });
  } catch (err) {
    res.status(500).json({ err });
  }
});

//delete
router.delete("/stokdarah/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const stok = await Stok.findByIdAndDelete(id);
    if (!stok) {
      res.status(404).json({ message: "stok darah tidak ditemukan" });
      return;
    }

    res.json({ message: "berhasil menghapus stok dirumah sakit" });
  } catch (_) {
    res.status(500).json({ message: "gagal menghapus" });
  }
});

module.exports = router;
