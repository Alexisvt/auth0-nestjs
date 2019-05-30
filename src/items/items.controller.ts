import { Body, Controller, Get, Post } from '@nestjs/common';
import { Item } from 'src/models/item.interface';

import { ItemService as ItemsService } from './services/item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: Item) {
    this.itemsService.create(item);
  }
}
