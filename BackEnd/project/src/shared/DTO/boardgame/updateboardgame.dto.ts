import { IsDefined, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateBoardGameDTO{

  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  newBoardgame_title: string

  @IsString()
  @MaxLength(200)
  @MinLength(0)
  newBoardgame_subtitle: string
  
  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  newBoardgame_genre: string

  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  newBoardgame_difficulty: string


  @IsNumber()
  @IsDefined()
  newBoardgame_playtime: number

  @IsNumber()
  @IsDefined()
  newBoardgame_maxPlayers: number
  
  @IsString()
  @IsDefined()
  @MaxLength(500)
  @MinLength(2)
  newBoardgame_synopsis: string
}