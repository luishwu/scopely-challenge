import { Test, TestingModule } from '@nestjs/testing';
import { BattleServiceController } from './battle-service.controller';
import { BattleServiceService } from './battle-service.service';

describe('BattleServiceController', () => {
  let battleServiceController: BattleServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BattleServiceController],
      providers: [BattleServiceService],
    }).compile();

    battleServiceController = app.get<BattleServiceController>(BattleServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(battleServiceController.getHello()).toBe('Hello World!');
    });
  });
});
