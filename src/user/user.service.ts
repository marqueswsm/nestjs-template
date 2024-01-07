import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { IUserService } from "./user.service.interface";

@Injectable()
export class UserService implements IUserService{
    async create(user: UserDto): Promise<void> {
        
    }
}