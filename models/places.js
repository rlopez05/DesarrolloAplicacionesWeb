var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placesSchema = new Schema({
  placeName:{
    type:String, 
    lowercase:true,
    defualt:'',
    required:'Please fill restaurant name',
    trim:true
  },
  placeCoords:{ 'type': {type: String, enum: "Point", default: "Point"},coordinates: { type: [Number],   default: [0,0]} },
  activePlace:{
    type:Boolean,
    default:false,
    required:"Please add the coords for this place"
  },
  tags:{
    type:String,
    default:'',
    trim:true,
    required:'Please add at least one tag'
  },

  user:{
      type:Schema.ObjectId,
      ref:'User'
  }

});
placesSchema.index({placeCoords: '2dsphere'});
mongoose.model('Places', placesSchema);