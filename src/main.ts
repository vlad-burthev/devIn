import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { envVariables } from './utils/envVariables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`server started on port ${envVariables.port}`);
  await app.listen(8888);
}
bootstrap();
