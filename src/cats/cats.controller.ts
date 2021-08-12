import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getAllCats() {
    const result = await this.catService.getCats();

    return result;
  }

  @Get(':id')
  async getCat(@Param('id') catId: string) {
    const result = await this.catService.getCat(catId);
    return result;
  }

  @Get('images/:id')
  async getImgs(@Param('id') bredId: string) {
    const result = await this.catService.getImages(bredId);
    return result;
  }

  @Patch(':id')
  async updateCat(@Param('id') catId: string) {
    const result = await this.catService.updateCat(catId);
    return result;
  }
}
