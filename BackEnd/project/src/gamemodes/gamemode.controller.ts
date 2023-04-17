import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Body, ValidationPipe, Put, Delete  } from "@nestjs/common";
import { GameModeService } from "./gamemode.service";
import { GameModeDTO } from "src/shared/DTO/gamemode/gamemode.dto";
import { GameModeIdDTO } from "src/shared/DTO/gamemode/gamemodeid.dto";
import { CreateGameModeDTO } from "src/shared/DTO/gamemode/creategamemode.dto";
import { GameModeEntity } from "src/shared/entities/gamemode.entity";
import { BoardGameDTO } from "src/shared/DTO/boardgame/boardgame.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateGameModeDTO } from "src/shared/DTO/gamemode/updategamemode.dto";
import { UpdateResult} from 'typeorm'

@ApiTags("Game Mode")
@Controller("api/gamemode")
export class GameModeController{

  constructor(
    private readonly gameModeServ : GameModeService
  ){}

  // GET ALL
  @ApiOperation({ summary : "Récupère TOUS les modes de jeu"})
  @ApiResponse({ type : GameModeDTO})
  @Get()
  getAll():Promise<GameModeDTO[]>{
    return this.gameModeServ.getAll()
  }

  // GET ONE
  @ApiOperation({ summary : "Récupère UN mode de jeu"})
  @ApiResponse({ type : GameModeDTO})
  @Get(":gamemodeId")
  async getOne(
    @Param("gamemodeId", ParseIntPipe) gamemodeId : GameModeIdDTO
    ) : Promise<GameModeDTO>
    {
      let foundGameMode = await this.gameModeServ.getOne(gamemodeId)

      if(!foundGameMode) { throw new NotFoundException (`the request game mode #${gamemodeId} was not found`)}
      
      else return foundGameMode
    }

    // CREATE
    @ApiOperation({ summary : "Crée un mode de jeu"})
    @Post()
      newGameMode(
        @Body(ValidationPipe) newGameMode : CreateGameModeDTO
        ) : Promise<GameModeDTO>
    {
      return this.gameModeServ.newGameMode(newGameMode)
    }

    // UPDATE
    @ApiOperation({ summary : "Mise à jour d'un mode de jeu"})
    @Put(":gamemodeId")
    updateGameMode(
      @Param("gamemodeId", ParseIntPipe) gamemodeId : GameModeIdDTO,
      @Body(ValidationPipe) updatedGameMode: UpdateGameModeDTO
    ) : Promise<GameModeDTO>
    {
      return this.gameModeServ.updateGameMode(gamemodeId, updatedGameMode)
    }

    // DELETE
    @ApiOperation({ summary : "Supprime un mode de jeu (SoftDelete)"})
    @Delete(":gamemodeId")
    async deleteGameMode(
      @Param("gamemodeId", ParseIntPipe) gamemodeId : GameModeIdDTO
    ) : Promise<UpdateResult>
    {
      return this.gameModeServ.deleteGameMode(gamemodeId)
    }
}