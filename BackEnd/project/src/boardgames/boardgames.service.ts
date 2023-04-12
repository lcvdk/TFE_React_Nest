import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BoardGameDTO } from "src/shared/DTO/boardgame/boardgame.dto";
import { BoardgameIdDTO } from "src/shared/DTO/boardgame/boardgameId.dto";
import { CreateBoardGameDTO } from "src/shared/DTO/boardgame/createBoardgame.dto";
import { UpdateBoardGameDTO } from "src/shared/DTO/boardgame/updateboardgame.dto";
import { BoardGamesEntity } from "src/shared/entities/boardgames.entity";
import { Repository,UpdateResult } from "typeorm"

@Injectable()
export class BoardGameService{

  constructor(
    @InjectRepository(BoardGamesEntity) private boardGameRepo : Repository<BoardGamesEntity>
  ){}


  
  // GET ALL
    async getAll() : Promise<BoardGameDTO[]>{ // promesse renvoit un tableau de DTO
      let allBoardGames : BoardGameDTO[] = await this.boardGameRepo.find() // le tableau de DTO
      return allBoardGames
    }
  // GET ONE
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

  // UPDATE
  async updateBoardGame(boardGameId : BoardgameIdDTO, bodyData : UpdateBoardGameDTO) : Promise<BoardGameDTO>
  {
    let foundBoardgame : BoardGamesEntity = await this.boardGameRepo.findOneBy({boardgame_id : boardGameId})
    if(!foundBoardgame) throw new NotFoundException(`Boardgame with the ID ${boardGameId} not found`)

    foundBoardgame = Object.assign(foundBoardgame, bodyData) //compare les deux, et mets les champs en commun, prend les infos du 2e paramètres, et garde les valeurs similaires
  
    let result = await this.boardGameRepo.save(foundBoardgame)
    
    return result
  }

  //DELETE
  async deleteBoardGame(boardGameId : BoardgameIdDTO) : Promise<UpdateResult>
  {
    return await this.boardGameRepo.softDelete(boardGameId)
  }
}