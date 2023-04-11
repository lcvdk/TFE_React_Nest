import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlayerDTO } from "src/shared/DTO/player/createPlayer.dto";
import { PlayerDTO } from "src/shared/DTO/player/player.dto";
import { PlayerIdDTO } from "src/shared/DTO/player/playerId.dto";
import { PlayersEntity } from "src/shared/entities/player.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlayerService{

  constructor(
    @InjectRepository(PlayersEntity) private playerRepo : Repository<PlayersEntity>
  ){}

  async getAll(): Promise<PlayerDTO[]> 
  {
    return this.playerRepo.find()
  }

  async getOne(playerId : PlayerIdDTO  ) : Promise<PlayerDTO>
  {
    let foundPlayer = await this.playerRepo.findOne({

      where : { player_id : playerId}

    })  
    
    .catch((error) => { throw new NotFoundException(`##### Sorry the player with the id ${playerId} is not found #####`)})
    
    return foundPlayer
  }


  async addPlayer(newPlayer : CreatePlayerDTO) : Promise<PlayersEntity>
  {
    let createPlayerEntity = this.playerRepo.create(newPlayer)
    let newPlayerCreated = await this.playerRepo.save(createPlayerEntity)
    .catch(_ =>{throw new InternalServerErrorException("erreur sql")})
    return newPlayerCreated
  }
}