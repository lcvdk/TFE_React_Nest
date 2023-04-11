import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class PlayerDTO{
  @IsNumber()
  @IsDefined()
  player_id: number
  
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
