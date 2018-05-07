import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: {type: String},
  address: {type: String},
  dob: {type: Date},
  phoneNumber: {type: Number},
});

export default mongoose.model('members', memberSchema);
