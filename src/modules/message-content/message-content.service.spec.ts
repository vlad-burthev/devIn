import { Test, TestingModule } from '@nestjs/testing';
import { MessageContentService } from './message-content.service';

describe('MessageContentService', () => {
  let service: MessageContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageContentService],
    }).compile();

    service = module.get<MessageContentService>(MessageContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
