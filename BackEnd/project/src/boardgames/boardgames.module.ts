import { Module } from "@nestjs/common";
import { BoardGameService } from "./boardgames.service";
import { BoardGameController } from "./boardgames.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardGamesEntity } from "src/shared/entities/boardgames.entity";

@Module({
  imports : [TypeOrmModule.forFeature([
    BoardGamesEntity
])],
  controllers: [BoardGameController],
  providers: [BoardGameService]
})
export class BoardGameModule{}