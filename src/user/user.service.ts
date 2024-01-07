import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";
import { IUserService } from "./user.service.interface";
import { UserRepository } from "./user.repository";
import { IUserRepository } from "./user.repository.interface";

@Injectable()
export class UserService implements IUserService{
    private readonly userRepository: IUserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async create(user: UserDto): Promise<void> {
        this.userRepository.create(user);
    }
}
