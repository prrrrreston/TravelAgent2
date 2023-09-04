const mongoose = require('mongoose');

const vacationsSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    place: String,
    hotels: [
      {
        name: String,
        address: Location,
      }
    ],
    thingsToDO: [
      {
        name: String,
        address: String,
      }
    ], //more props will be added later
  })

module.exports = mongoose.model('Vacation', userSchema);
