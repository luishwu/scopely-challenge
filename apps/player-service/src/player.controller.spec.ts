import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';

describe('PlayerController', () => {
  let playerController: PlayerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [PlayerService],
    }).compile();

    playerController = app.get<PlayerController>(PlayerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(playerController.getHello()).toBe('Hello World!');
    });
  });
});
