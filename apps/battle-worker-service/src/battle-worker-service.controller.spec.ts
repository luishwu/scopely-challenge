import { Test, TestingModule } from '@nestjs/testing';
import { BattleWorkerServiceController } from './battle-worker-service.controller';
import { BattleWorkerServiceService } from './battle-worker-service.service';

describe('BattleWorkerServiceController', () => {
  let battleWorkerServiceController: BattleWorkerServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BattleWorkerServiceController],
      providers: [BattleWorkerServiceService],
    }).compile();

    battleWorkerServiceController = app.get<BattleWorkerServiceController>(BattleWorkerServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(battleWorkerServiceController.getHello()).toBe('Hello World!');
    });
  });
});
