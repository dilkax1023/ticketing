import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

class LogInDto {
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	public email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6)
	@MaxLength(20)
	public password: string;
}

export default LogInDto;
