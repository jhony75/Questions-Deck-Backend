import { IsString, IsNotEmpty } from 'class-validator';

export class DeckDto {
  @IsString()
  @IsNotEmpty()
  question: string;
  @IsString()
  @IsNotEmpty()
  answer: string;
}
