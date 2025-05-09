import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/auth/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './common/config/typeorm.config';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeormConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
