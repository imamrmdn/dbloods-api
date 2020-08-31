const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const informasiSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  sumber: {
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
  tanggalDibuat: {
    type: Date,
  },
});

const Informasi = mongoose.model("Informasi", informasiSchema);
module.exports = Informasi;
