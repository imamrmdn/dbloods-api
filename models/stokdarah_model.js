const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stokSchema = new Schema({
  nama_rs: {
    type: String,
    required: true,
  },
  alamat_rs: {
    type: String,
    required: true,
  },
  no_telp: {
    type: String,
    required: true,
  },
  gol_Apos: {
    type: Number,
    required: true,
  },
  gol_Bpos: {
    type: Number,
    required: true,
  },
  gol_Opos: {
    type: Number,
    required: true,
  },
  gol_ABpos: {
    type: Number,
    required: true,
  },
  gol_Aneg: {
    type: Number,
    required: true,
  },
  gol_Bneg: {
    type: Number,
    required: true,
  },
  gol_Oneg: {
    type: Number,
    required: true,
  },
  gol_ABneg: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Stok = mongoose.model("Stok", stokSchema);
module.exports = Stok;
