import { PlayerService } from "./players.service";
import { Get, Post, Body, ValidationPipe, Param, NotFoundException, Controller, Put, Delete } from "@nestjs/common"
import { CreatePlayerDTO } from "src/shared/DTO/player/createPlayer.dto";
import { PlayerDTO } from "src/shared/DTO/player/player.dto";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { PlayerIdDTO } from "src/shared/DTO/player/playerId.dto";
import { ApiTags } from "@nestjs/swagger";
import { UpdatePlayerDTO } from "src/shared/DTO/player/updateplayer.dto";
import { UpdateResult } from 'typeorm'

@ApiTags("Players")
@Controller("api/players")
export class PlayerController{

  constructor(
    private readonly playersServ : PlayerService
  ){}

  @Get()
  getAll() : Promise<PlayerDTO[]>
  {
    return this.playersServ.getAll()
  }


  @Get(":playerId")
  async getOne(
    @Param("playerId", ParseIntPipe) playerId : PlayerIdDTO
    
  ) : Promise<PlayerDTO>
  {
    let playerFound = await this.playersServ.getOne(playerId)
    
    if(!playerFound) throw new NotFoundException(`player #${playerId} not Found`)

    else return playerFound 
  }


  @Post()
  addPlayer(
    @Body(ValidationPipe) newPlayer : CreatePlayerDTO
  ) : Promise<PlayerDTO>
  {
    return this.playersServ.addPlayer(newPlayer)
  }

  @Put(":playerId")
    updatePlayer(
    @Param("playerId", ParseIntPipe) playerId : PlayerIdDTO,
    @Body(ValidationPipe) updatingPlayer : UpdatePlayerDTO
    ) : Promise<PlayerDTO>
    {
      return this.playersServ.updatePlayer(playerId, updatingPlayer)
    }

// DELETE
  @Delete(":playerId")
    deletePlayer(
      @Param("playerId", ParseIntPipe) playerId : PlayerIdDTO
    ) : Promise<UpdateResult>
    {
      return this.playersServ.deletePlayer(playerId)
    }
}