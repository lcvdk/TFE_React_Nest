import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"


export class GameModeDTO{
  @IsNumber()
  @IsDefined()
  gameMode_id: number
  
  @IsString()
  @IsDefined()
  @MaxLength(30)
  @MinLength(2)
  gameMode_title : string
}