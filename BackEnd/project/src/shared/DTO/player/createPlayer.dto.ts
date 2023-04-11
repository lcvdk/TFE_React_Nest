import { IsNumber, IsDefined, IsString, MaxLength, MinLength } from "class-validator"

export class CreatePlayerDTO{
  
  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  player_pseudo: string

  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  player_email: string
}