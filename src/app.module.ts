import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoryModule } from './memory/memory.module';
import { ScrapModule } from './scrap/scrap.module';
import { CookieModule } from './cookie/cookie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComCode } from './entity/comcode.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MpaModule } from './mpa/mpa.module';
import { SpaModule } from './spa/spa.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entity/user.entity';
import { LighthouseModule } from './lighthouse/lighthouse.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    MemoryModule, 
    ScrapModule, 
    CookieModule,
    MpaModule,
    SpaModule,
    UserModule,
    AuthModule,
    LighthouseModule,
    SessionModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'test01!',
      database: 'testDB',
      entities: [
      ],
      synchronize: false,
      logging: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'service')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
