import { Module } from "@nestjs/common";
import { GameModeController } from "./gamemode.controller";
import { GameModeService } from "./gamemode.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameModeEntity } from "src/shared/entities/gamemode.entity";

@Module({
  imports: [TypeOrmModule.forFeature([
    GameModeEntity
])],
  controllers:[GameModeController],
  providers: [GameModeService]
})
export class GameModeModule{} 