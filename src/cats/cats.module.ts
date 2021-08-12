import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './cats.controller';
import { CatSchema } from './cats.model';
import { CatService } from './cats.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    ConfigModule,
  ],
  controllers: [CatsController],
  providers: [CatService],
})
export class CatsModule {}
