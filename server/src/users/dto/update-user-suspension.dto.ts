import { IsBoolean } from 'class-validator';

export class UpdateUserSuspensionDto {
  @IsBoolean()
  isSuspended!: boolean;
}
