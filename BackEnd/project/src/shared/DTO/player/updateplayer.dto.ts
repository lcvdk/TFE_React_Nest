import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class UpdatePlayerDTO{

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