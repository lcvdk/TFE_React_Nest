import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePlayerDTO } from "src/shared/DTO/player/createPlayer.dto";
import { PlayerDTO } from "src/shared/DTO/player/player.dto";
import { PlayerIdDTO } from "src/shared/DTO/player/playerId.dto";
import { UpdatePlayerDTO } from "src/shared/DTO/player/updateplayer.dto";
import { PlayersEntity } from "src/shared/entities/player.entity";
import { Repository,UpdateResult } from "typeorm";

@Injectable()
export class PlayerService{

  constructor(
    @InjectRepository(PlayersEntity) private playerRepo : Repository<PlayersEntity>
  ){}

  // GET ALL 
  async getAll(): Promise<PlayerDTO[]> 
  {
    return this.playerRepo.find()
  }

  // GET ONE
  async getOne(playerId : PlayerIdDTO  ) : Promise<PlayerDTO>
  {
    let foundPlayer = await this.playerRepo.findOne({

      where : { player_id : playerId}

    })  
    
    .catch((error) => { throw new NotFoundException(`##### Sorry the player with the id ${playerId} was not found #####`)})
    
    return foundPlayer
  }

  // CREATE
  async addPlayer(newPlayer : CreatePlayerDTO) : Promise<PlayersEntity>
  {
    let createPlayerEntity = this.playerRepo.create(newPlayer)
    let newPlayerCreated = await this.playerRepo.save(createPlayerEntity)
    .catch(_ =>{throw new InternalServerErrorException("erreur sql")})
    return newPlayerCreated
  }

  // UPDATE
  async updatePlayer(playerId : PlayerIdDTO, updatingPlayer : UpdatePlayerDTO)
  {
    let foundPlayer : PlayersEntity  = await this.playerRepo.findOneBy({player_id : playerId})
    if(!foundPlayer) throw new NotFoundException(`Player with the ID ${playerId} was not found`)

    foundPlayer = Object.assign(foundPlayer, updatingPlayer)

    let updatedPlayer = await this.playerRepo.save(foundPlayer)
    
    return updatedPlayer

  }

  // DELETE
  async deletePlayer(playerId : PlayerIdDTO) : Promise<UpdateResult>
  {
    return await this.playerRepo.softDelete(playerId)
  }

}