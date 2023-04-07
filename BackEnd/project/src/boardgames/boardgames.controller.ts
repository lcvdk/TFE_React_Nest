import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, ValidationPipe, Body } from "@nestjs/common";
import { BoardGameDTO } from "src/shared/DTO/boardgame.dto";
import { BoardGameService } from "./boardgames.service";
import { CreateBoardGameDTO } from "src/shared/DTO/createBoardgame.dto";


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
    @Param("boardgameId", ParseIntPipe) boardGameId : number
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
}