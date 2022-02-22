import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://marcosht:mongo123@localhost:27017/?authSource=admin&readPreference=primary&ssl=false'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
