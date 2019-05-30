import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';

import { CreateItemDto } from '../dtos/create-item.dto';
import { Item } from '../models/item.interface';
import { ValidationPipe } from '../shared/validation.pipe';
import { ItemService as ItemsService } from './services/item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() item: CreateItemDto) {
    this.itemsService.create(item);
  }
}
