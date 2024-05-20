import { Module } from '@nestjs/common';
import { PostContentService } from './post-content.service';
import { PostContentController } from './post-content.controller';

@Module({
  providers: [PostContentService],
  controllers: [PostContentController]
})
export class PostContentModule {}
