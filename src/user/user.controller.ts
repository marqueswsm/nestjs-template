import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ValidationPipe } from 'src/helper/schemaValidator';
import { UserService } from './user.service';

@Controller()
export class UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    @Post('user')
    @HttpCode(201)
    async create(@Body(new ValidationPipe) body: UserDto): Promise<void> {
        await this.userService.create(body);
    }
}