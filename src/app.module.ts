import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DecksController } from './decks/decks.controller';
import { DecksService } from './decks/decks.service';
import { DecksModule } from './decks/decks.module';

@Module({
  imports: [DecksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
