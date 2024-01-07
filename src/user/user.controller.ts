import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ValidationPipe } from 'src/helper/schemaValidator';

@Controller()
export class UserController {

    @Post('user')
    @HttpCode(201)
    create(@Body(new ValidationPipe) body: UserDto): void {
     
    }
}