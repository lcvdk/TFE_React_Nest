import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGameModeDTO } from "src/shared/DTO/gamemode/creategamemode.dto";
import { GameModeDTO } from "src/shared/DTO/gamemode/gamemode.dto";
import { GameModeIdDTO } from "src/shared/DTO/gamemode/gamemodeid.dto";
import { GameModeEntity } from "src/shared/entities/gamemode.entity";
import { Repository, UpdateResult } from "typeorm"

@Injectable()
export class GameModeService{

  constructor(
    @InjectRepository(GameModeEntity) private gameModeRepo : Repository<GameModeEntity>
  ){}



// GET ALL  
async getAll() : Promise<GameModeDTO[]>{
  let allGameModes : GameModeDTO[] = await this.gameModeRepo.find()
  return allGameModes
}

// GET ONE
async getOne(gameModeId : GameModeIdDTO): Promise<GameModeDTO>{
  let oneGameMode : GameModeDTO = await this.gameModeRepo.findOneOrFail({ where :{ gameMode_id : gameModeId}})
  
  .catch((error) => { throw new NotFoundException(`#### Sorry the game mode ${gameModeId} was not found ####`) })
  return oneGameMode  
}

// CREATE
async newGameMode(newGameMode : CreateGameModeDTO) : Promise<GameModeEntity>{
  let gameModeExists = await this.gameModeRepo.findOne({
    where : { gameMode_title : newGameMode.gameMode_title}
  })

  return
}
}