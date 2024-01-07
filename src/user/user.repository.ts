import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { IUserRepository } from "./user.repository.interface";

@Injectable()
export class UserRepository implements IUserRepository {
    async create(user: UserDto): Promise<void> {
        
    }
}
