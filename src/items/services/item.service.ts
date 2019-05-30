import { Injectable } from '@nestjs/common';
import { Item } from 'dist/models/item.interface';

@Injectable()
export class ItemService {
  private readonly items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item) {
    this.items.push(item);
  }
}
