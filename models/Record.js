import mongoose from 'mongoose';

const RecordSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    amount: {
      type: String,
      require: true,
    },
    distance: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Record', RecordSchema);
