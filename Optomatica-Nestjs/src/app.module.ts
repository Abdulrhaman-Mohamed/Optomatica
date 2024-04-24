import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [TestModule,MongooseModule.forRoot('mongodb+srv://abdo:abdo12345@cluster0.nex5vtl.mongodb.net/',{dbName:"Optomatica"}), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
