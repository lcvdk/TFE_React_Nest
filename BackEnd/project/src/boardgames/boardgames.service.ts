import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardGameDTO } from "src/shared/DTO/boardgame.dto";
import { BoardgameIdDTO } from "src/shared/DTO/boardgameId.dto";
import { CreateBoardGameDTO } from "src/shared/DTO/createBoardgame.dto";
import { BoardGamesEntity } from "src/shared/entities/boardgames.entity";
import { Repository } from "typeorm"

@Injectable()
export class BoardGameService{

  constructor(
    @InjectRepository(BoardGamesEntity) private boardGameRepo : Repository<BoardGamesEntity>
  ){}

    async getAll() : Promise<BoardGameDTO[]>{ // promesse renvoit un tableau de DTO
      let allBoardGames : BoardGameDTO[] = await this.boardGameRepo.find() // le tableau de DTO
      return allBoardGames
    }

    async getOne(boardGameId : BoardgameIdDTO) : Promise<BoardGameDTO>{
      let oneBoardGame : BoardGameDTO = await this.boardGameRepo.findOneOrFail({ where :{ boardgame_id : boardGameId}})
    .catch((error) => { throw new NotFoundException(`##### Sorry the boardgame with the id ${boardGameId} is not found #####`)}) 
      return oneBoardGame
  }
  //POST
  async newBoardGame(newBoardGamed : CreateBoardGameDTO) : Promise<BoardGamesEntity>{
    let boardGameExists = await this.boardGameRepo.findOne({
      where :{boardgame_title : newBoardGamed.boardgame_title} 
    })
    
    if(boardGameExists == null){
      let createBoardGameEntity = this.boardGameRepo.create(newBoardGamed)
      let newBoardGamedCreated = await this.boardGameRepo.save(createBoardGameEntity)
      .catch(_ => { throw new InternalServerErrorException("Erreur SQL")})
      
      return newBoardGamedCreated
    }
      else { throw new InternalServerErrorException("Erreur Service : boardgame already exists")} 
  }
}