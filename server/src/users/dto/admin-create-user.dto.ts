import { IsEnum, IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { UserRole } from '../enums/user-role.enum';

export class AdminCreateUserDto extends CreateUserDto {
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
