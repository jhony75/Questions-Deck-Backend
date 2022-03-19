import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DeckDto } from './dto/create-deck.dto';
import { DecksService } from './decks.service';
import { Deck } from 'src/decks/interfaces/deck.interface';

@Controller('decks')
export class DecksController {
  constructor(private decksService: DecksService) {}

  @Get()
  findAll() {
    return this.decksService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id) {
    return this.decksService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() deckDto: DeckDto) {
    return this.decksService.create(deckDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id, @Body() deckDto: DeckDto) {
    return this.decksService.update(id, deckDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.decksService.delete(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
