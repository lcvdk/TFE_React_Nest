import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Body, ValidationPipe } from "@nestjs/common";
import { GameModeService } from "./gamemode.service";
import { GameModeDTO } from "src/shared/DTO/gamemode/gamemode.dto";
import { GameModeIdDTO } from "src/shared/DTO/gamemode/gamemodeid.dto";
import { CreateGameModeDTO } from "src/shared/DTO/gamemode/creategamemode.dto";
import { GameModeEntity } from "src/shared/entities/gamemode.entity";
import { BoardGameDTO } from "src/shared/DTO/boardgame/boardgame.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Game Mode")
@Controller("api/gamemode")
export class GameModeController{

  constructor(
    private readonly gameModeServ : GameModeService
  ){}

  // GET ALL
  @Get()
  getAll():Promise<GameModeDTO[]>{
    return this.gameModeServ.getAll()
  }

  // GET ONE
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
    @Post()
      newGameMode(
        @Body(ValidationPipe) newGameMode : CreateGameModeDTO
        ) : Promise<GameModeDTO>
    {
      return this.gameModeServ.newGameMode(newGameMode)
    }


}