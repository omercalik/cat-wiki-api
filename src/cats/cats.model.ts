import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  bred_id: String,
  description: String,
  temperament: String,
  origin: String,
  life_span: String,
  adaptability: Number,
  affection_level: Number,
  child_friendly: Number,
  grooming: Number,
  intelligence: Number,
  health_issues: Number,
  social_needs: Number,
  stranger_friendly: Number,
  imageUrl: String,
  search_count: Number,
});

export interface Cat extends mongoose.Document {
  id: string;
  name: string;
  bred_id: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  imageUrl: string;
  search_count: number;
}
