const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const SaveOnMongo = new Schema({
    
    code: { type: String },
    link: { type: String, trim: true },
    parent_id: { type: String },
    tablecompnt: { type: String },
    detail: {
        ISIN : { type: String },
        symol : { type: String },
        company : { type: String },
        sharenumber :{ type: String },
      },
      spaciaDelete:{ type: String },
      price: {
        opening:{ type: String },
        closeing : { type: String },
        last : { type: String },
        lowest: { type: String },
        heigth : { type: String },
        yesterday : { type: String },
      },
      cost:  { type: String },
      value:  { type: String },
      volume:  { type: String },
});






module.exports = mongoose.model("Testi1", SaveOnMongo);