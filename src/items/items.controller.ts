import { Body, Controller, Get, Post } from '@nestjs/common';

import { ItemService as ItemsService } from './services/item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<string[]> {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() item: string) {
    this.itemsService.create(item);
  }
}
