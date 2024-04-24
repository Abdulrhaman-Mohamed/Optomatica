import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private readonly model: Model<BookDocument>) {

    
  }
  async create(createBookDto: CreateBookDto) : Promise<Book>{
    return await this.model.create(createBookDto);
  }

  async findAll() : Promise<Book[]> {
    return await this.model.find().exec() ;
  }

  async findbyQuery(title: string , year:number) : Promise<Book[]> {
   const reg = new RegExp(title.split("").join("\\s*"), 'i');
   if(!year) return await this.model.find({title:reg}).exec() ;

    return await this.model.find({title:reg , $expr: {
      $eq: [{ $year: "$publishedDate" }, year]
    } }).exec() ;
  }


  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
