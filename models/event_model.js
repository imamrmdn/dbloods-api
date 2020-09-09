const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  alamat: {
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
  createdDate: {
    type: Date,
    default: Date.now,
  },
  tanggalEvent: {
    type: Date,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
