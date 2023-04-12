import { IsDefined, IsString, MaxLength, MinLength } from "class-validator"


export class CreateGameModeDTO{
    
  @IsString()
  @IsDefined()
  @MaxLength(30)
  @MinLength(2)
  gameMode_title : string
}