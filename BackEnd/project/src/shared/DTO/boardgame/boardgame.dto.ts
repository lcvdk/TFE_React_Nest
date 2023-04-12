import { IsNumber, IsDefined, IsString, MaxLength, MinLength, IsObject } from "class-validator"

export class BoardGameDTO{
  
  @IsNumber()
  @IsDefined()
  boardgame_id: number

  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  boardgame_title: string

  @IsString()
  @MaxLength(200)
  @MinLength(2)
  boardgame_subtitle: string
  
  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  boardgame_genre: string

  @IsString()
  @IsDefined()
  @MaxLength(100)
  @MinLength(2)
  boardgame_difficulty: string


  @IsNumber()
  @IsDefined()
  boardgame_playtime: number

  @IsNumber()
  @IsDefined()
  boardgame_maxPlayers: number
  
  @IsString()
  @IsDefined()
  @MaxLength(500)
  @MinLength(2)
  boardgame_synopsis: string

  
}