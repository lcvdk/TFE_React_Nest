import { IsDefined, IsString, MaxLength, MinLength } from "class-validator"


export class UpdateGameModeDTO{
    
  @IsString()
  @IsDefined()
  @MaxLength(30)
  @MinLength(2)
  New_gameMode_title : string
}