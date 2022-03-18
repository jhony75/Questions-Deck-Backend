import { Controller, Get } from '@nestjs/common';

@Controller('decks')
export class DecksController {
  @Get()
  findAll(): string {
    return 'Decks are collections of questions and answers. Like Anki flashcards.';
  }
}
