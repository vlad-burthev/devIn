import { Module } from '@nestjs/common';
import { MessageContentController } from './message-content.controller';
import { MessageContentService } from './message-content.service';

@Module({
  controllers: [MessageContentController],
  providers: [MessageContentService]
})
export class MessageContentModule {}
