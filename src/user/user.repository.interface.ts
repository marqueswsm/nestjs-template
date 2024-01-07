import { UserDto } from "./dto/user.dto";

export interface IUserRepository {
    create(user: UserDto): Promise<void>;
}