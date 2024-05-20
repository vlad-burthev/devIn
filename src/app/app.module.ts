import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { dbConfiguration } from '../utils/dbConfiguration';
import { GoogleStrategy } from 'src/auth/google.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      load: [dbConfiguration],
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
