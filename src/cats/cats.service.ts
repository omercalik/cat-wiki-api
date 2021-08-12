import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';

import { Cat } from './cats.model';

@Injectable()
export class CatService {
  constructor(
    @InjectModel('Cat') private readonly catModel: Model<Cat>,
    private configService: ConfigService,
  ) {}

  async getCats() {
    const cats = this.catModel.find().sort({ search_count: 'desc' });
    return cats;
  }

  async getCat(catId: string) {
    const result = this.catModel.findById(catId);

    return result;
  }

  async updateCat(catId: string) {
    const cat = await this.catModel.findById(catId);

    cat.search_count += 1;

    await cat.save();

    return cat;
  }

  async getImages(bredId: string) {
    const api_key = this.configService.get<string>('API_KEY');
    const images = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${bredId}&limit=8`,
      {
        headers: {
          'x-api-key': api_key,
        },
      },
    );

    let imageUrls = images.data.map((res) => {
      return {
        url: res.url,
      };
    });

    return imageUrls;
  }
}
