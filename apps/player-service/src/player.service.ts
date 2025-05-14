import { Inject, Injectable } from '@nestjs/common';
import { PlayersRepository } from './application/players.repository';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PlayersRepository)
    private readonly playerRepository: PlayersRepository,
  ) {}

  getHello(): string {
    return 'Hello World from Player Service!';
  }

  async create(player: Player): Promise<string> {
    try {
      return await this.playerRepository.create(player);
    } catch (error) {
      throw new Error(error);
    }
  }
}
