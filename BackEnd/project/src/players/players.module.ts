import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersEntity } from "src/shared/entities/player.entity";
import { PlayerController } from "./players.controller";
import { PlayerService } from "./players.service";

@Module({
  imports : [TypeOrmModule.forFeature([
    PlayersEntity
])],
  controllers: [PlayerController],
  providers: [PlayerService]
})
export class PlayerModule{}