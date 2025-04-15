const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const travelStorySchema = new Schema({
    title: { type: String, required: true},//Title compulsory ga undali, lekapothe error vastadi.
    story: { type: String, required: true },//Travel experience details store chestham.
    visitedLocation: { type: [String], default: []},//User ekkada travel chesado list lo store chestham.
    isFavourite: { type: Boolean, default: false },// User ki i story special aite, true chesthadi.
    userId: { type: Schema.Types.ObjectId, ref:"User", required: true},
    createdOn: { type: Date, default: Date.now},
    imageUrl: { type: String, required: true},
    visitedDate: { type: Date, required: true},
});

module.exports = mongoose.model("TravelStory", travelStorySchema);
