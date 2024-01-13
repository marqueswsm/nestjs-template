import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { ValidationPipe } from 'src/helper/schemaValidator';
import { UserService } from './user.service';
import { createLogger, format, transports } from 'winston';

// /home/pop/Documents/Projects/log.log
const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [
      new transports.File({ filename: `/home/pop/Documents/Projects/log.log` }),
    ],
  });
  
@Controller()
export class UserController {
    private readonly userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    @Post('user')
    @HttpCode(201)
    async create(@Body(new ValidationPipe) body: UserDto): Promise<void> {
        logger.info('Create driver starting', body)
        await this.userService.create(body);
    }
}