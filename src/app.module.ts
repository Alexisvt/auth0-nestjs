import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemService } from './items/services/item.service';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, ItemsController, ShoppingCartController],
  providers: [AppService, ItemService],
})
export class AppModule {}
