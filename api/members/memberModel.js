import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {type: String},
  address: {type: String},
  dob: {type: String, required:true},
  phoneNumber: {type: String},
});

export default mongoose.model('members', memberSchema);
