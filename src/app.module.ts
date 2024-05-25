import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { ReportController } from './report/report.controller';
import { UserService } from './user/user.service';
import { ReportService } from './report/report.service';
import { User } from './user/user';
import { Report } from './report/report';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cp08tg21hbls73e62ve0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'art_galery_tblt_user',
      password: 'X8RbHBt6wT8DMIxl7A3lXrHddrhVDmsy',
      database: 'art_galery_tblt',
      entities: [User, Report],
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
    }),
    TypeOrmModule.forFeature([User, Report]),
  ],
  controllers: [AppController, UserController, ReportController],
  providers: [UserService, ReportService],
})
export class AppModule {}
