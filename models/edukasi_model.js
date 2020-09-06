const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const edukasiSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  penulis: {
    type: String,
    required: true,
  },
  gambar: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Edukasi = mongoose.model("Edukasi", edukasiSchema);
module.exports = Edukasi;
