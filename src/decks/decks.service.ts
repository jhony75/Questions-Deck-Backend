import { Injectable } from '@nestjs/common';
import { Deck } from 'src/decks/interfaces/deck.interface';
import { DeckDto } from './dto/create-deck.dto';

@Injectable()
export class DecksService {
  private decks: Deck[] = [
    {
      id: 1,
      question: 'When did World War II begin?',
      answer: 'It started in 1939.',
    },
    {
      id: 2,
      question: 'When did World War II end?',
      answer: 'it ended in 1945.',
    },
    {
      id: 3,
      question: 'Who were Cleopatra',
      answer: "She was Egypt's pharaoh from 51 BC to 30 BC.",
    },
    {
      id: 4,
      question: 'Which event ended the French monarchy? When?',
      answer: 'The French Revolution. It started in 1789.',
    },
    {
      id: 5,
      question: 'When did the Vikings got to North America?',
      answer:
        'The Vikings arrived, explored and colonized North America before Christopher Colombus.',
    },
    {
      id: 6,
      question: 'In the end of the French Revolution, what did Napoleon did?',
      answer: 'He declared himself as the Emperor of France.',
    },
    {
      id: 7,
      question: 'What happened because of the Cold War?',
      answer:
        'The world was divided in the Capitalist block and the Socialist block.',
    },
    {
      id: 8,
      question: 'Who was the first person to go to space?',
      answer: 'The first person to go to space was Yuri Gagarin.',
    },
    {
      id: 9,
      question: 'Who was the first man to step on the moon?',
      answer: 'The first man to walk the moon was Neil Armstrong.',
    },
    {
      id: 10,
      question: 'Who discovered Brazil?',
      answer: 'Pedro Alvares Cabral.',
    },
    {
      id: 11,
      question: 'When was Brazil discovered?',
      answer: 'Brazil was discovered in April 22nd of 1500.',
    },
    {
      id: 12,
      question: 'Who signed the "Lei Áurea"?',
      answer: 'Princess Isabel signed the "Golden Law".',
    },
    {
      id: 13,
      question: 'When was the "Lei Áurea" signed?',
      answer: 'It was signed in May 13th of 1888.',
    },
    {
      id: 14,
      question: 'When did the first Industrial Revolution started?',
      answer: 'It started around 1790.',
    },
    {
      id: 15,
      question: 'When did the "Space age" started?',
      answer: 'It started with the Cold War whe the WW2 ended.',
    },
  ];

  findAll() {
    return this.decks;
  }

  async findById(id: number) {
    const deck = this.decks.find((decks) => decks?.id === id);

    console.log(deck);

    if (!deck) {
      throw Error(`ID: ${id} not found.`);
    }

    return deck;
  }

  create(deckDto: DeckDto) {
    const id = this.decks.length + 1;
    const deck: Deck = {
      id,
      ...deckDto,
    };
    this.decks.push(deck);
    return deck;
  }

  async update(id: number, deckDto: DeckDto) {
    const index = this.decks.findIndex((deck) => deck?.id === id);

    if (index < 0) {
      throw Error(`Card with ID: ${id} not found.`);
    }

    const deck: Deck = {
      id,
      ...deckDto,
    };

    this.decks[index] = deck;
    return deck;
  }

  async delete(id: number) {
    const index = this.decks.findIndex((deck) => deck?.id === id);

    if (index < 0) {
      throw Error(`Card with ID: ${id} not found.`);
    }

    delete this.decks[index];

    return true;
  }
}
