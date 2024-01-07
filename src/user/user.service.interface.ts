import { UserDto } from "./dto/user.dto";

export interface IUserService {
    create(user: UserDto): Promise<void>;
}