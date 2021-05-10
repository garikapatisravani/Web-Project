const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FavouriteSchema = new mongoose.Schema({
  userid: {
    type: Schema.Types.ObjectId, 
    ref: 'user-register',
    unique: true
  },
  favourites: {
    type: Array,
    required: true
  }
});

const Favourites = mongoose.model("favorite-recipes", FavouriteSchema);
module.exports = Favourites;