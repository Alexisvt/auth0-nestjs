import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemService } from './items/services/item.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemService],
})
export class AppModule {}
