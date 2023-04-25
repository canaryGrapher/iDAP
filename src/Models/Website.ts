import mongoose, { Document, model, Model, Schema } from 'mongoose'

export interface IWebsite extends Document {
  websiteName: string;
  websiteUrl: string;
}

const WebsiteSchema: Schema = new Schema({
  websiteName: {
    type: String
  },
  websiteUrl: {
    type: String
  }
})

export const Website = (mongoose.models.Website ||
  model('Website', WebsiteSchema)) as Model<IWebsite>
