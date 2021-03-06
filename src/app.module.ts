import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ItemsController } from './items/items.controller';
import { ItemService } from './items/services/item.service';
import routes from './routes';
import { AuthenticationMiddleware } from './shared/authentication.middleware';
import { ShoppingCartController } from './shopping-cart/shopping-cart.controller';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, ItemsController, ShoppingCartController],
  providers: [AppService, ItemService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes(...routes);
  }
}
