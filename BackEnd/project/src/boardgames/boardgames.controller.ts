import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, ValidationPipe, Body, Put, Delete } from "@nestjs/common";
import { BoardGameDTO } from "src/shared/DTO/boardgame/boardgame.dto";
import { BoardGameService } from "./boardgames.service";
import { CreateBoardGameDTO } from "src/shared/DTO/boardgame/createBoardgame.dto";
import { BoardgameIdDTO } from "src/shared/DTO/boardgame/boardgameId.dto";
import { UpdateResult} from 'typeorm'
import { UpdateBoardGameDTO } from "src/shared/DTO/boardgame/updateboardgame.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger/dist";

@ApiTags("BoardGames")
@Controller("api/boardgames")
export class BoardGameController {


  constructor(
    private readonly boardGameServ : BoardGameService
  ){}

// GET ALL
  @ApiOperation({ summary : "Récupère TOUS les Jeux"})
  @Get()
  getAll():Promise<BoardGameDTO[]>{
  return this.boardGameServ.getAll()
}

//GET ONE

  @ApiOperation({ summary : "Récupère UN Jeu"})
  @Get(":boardgameId")
  async getOne(
    @Param("boardgameId", ParseIntPipe) boardGameId : BoardgameIdDTO
  ) : Promise<BoardGameDTO>
    {
      let resultat = await this.boardGameServ.getOne(boardGameId)

      if(!resultat) { throw new NotFoundException(`Game with the id ${boardGameId} is not found`)}
      else{ return resultat }
    }

//CREATE
  @ApiOperation({ summary : "Crée un Jeu"})
  @Post()
    newBoardGame(
      @Body(ValidationPipe) newBoardGamed : CreateBoardGameDTO
    ) : Promise<BoardGameDTO> {
      return this.boardGameServ.newBoardGame(newBoardGamed)
    } 




//UPDATE
  @ApiOperation({ summary : "Mise à Jour d'un jeu"})
  @Put(":boardgameId")
    updateBoardGame(
      @Param("boardgameId", ParseIntPipe) boardGameId : BoardgameIdDTO,
      @Body(ValidationPipe) bodyData : UpdateBoardGameDTO,
    ) : Promise<BoardGameDTO>
    
    {
      return this.boardGameServ.updateBoardGame(boardGameId, bodyData)
    }



// DELETE
  @ApiOperation({ summary : "Efface un jeu (SoftDelete)"})
  @Delete(":boardgameId")
  async deleteBoardGame(
    @Param("boardgameId") boardGameId : BoardgameIdDTO
  ) : Promise<UpdateResult>
  {
    return this.boardGameServ.deleteBoardGame(boardGameId)
  }
}