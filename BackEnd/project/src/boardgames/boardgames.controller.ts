import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, ValidationPipe, Body, Put } from "@nestjs/common";
import { BoardGameDTO } from "src/shared/DTO/boardgame.dto";
import { BoardGameService } from "./boardgames.service";
import { CreateBoardGameDTO } from "src/shared/DTO/createBoardgame.dto";
import { BoardgameIdDTO } from "src/shared/DTO/boardgameId.dto";


@Controller("api/boardgames")
export class BoardGameController {


  constructor(
    private readonly boardGameServ : BoardGameService
  ){}

  @Get()
  getAll():Promise<BoardGameDTO[]>{
  return this.boardGameServ.getAll()
  }

  @Get(":boardgameId")
  async getOne(
    @Param("boardgameId", ParseIntPipe) boardGameId : BoardgameIdDTO
  ) : Promise<BoardGameDTO>
    {
      let resultat = await this.boardGameServ.getOne(boardGameId)

      if(!resultat) { throw new NotFoundException(`Game with the id ${boardGameId} is not found`)}
      else{ return resultat }
    }

  @Post()
    newBoardGame(
      @Body(ValidationPipe) newBoardGamed : CreateBoardGameDTO
    ) : Promise<BoardGameDTO> {
      return this.boardGameServ.newBoardGame(newBoardGamed)
    } 

  @Put(":boardgameId")
    async updateBoardGame(
      @Param("boardgameId", ParseIntPipe) boardGameId : BoardgameIdDTO,

    ) : Promise<BoardGameDTO>
    {
      return
    }
}