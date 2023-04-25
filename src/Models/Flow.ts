import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface IFlow extends Document {
  name: string;
  date: string;
}

const FlowSchema: Schema = new Schema({
  title: {
    type: String
  },
  date: {
    type: String
  },
  content: {
    type: String
  }
})

export const Flow = (mongoose.models.Flow ||
  model('Flow', FlowSchema)) as Model<IFlow>
