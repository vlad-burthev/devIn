import { Test, TestingModule } from '@nestjs/testing';
import { MessageContentController } from './message-content.controller';

describe('MessageContentController', () => {
  let controller: MessageContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageContentController],
    }).compile();

    controller = module.get<MessageContentController>(MessageContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
