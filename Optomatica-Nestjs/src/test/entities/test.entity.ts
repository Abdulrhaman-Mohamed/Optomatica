import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Test {

    @Prop({required:true})
    title: string;

    @Prop()
    description?: string;

}


export const TestSchema = SchemaFactory.createForClass(Test);
