import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardGameModule } from './boardgames/boardgames.module';
import { PlayerModule } from './players/players.module';
import { GameModeModule } from './gamemodes/gamemode.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mssql",
    host : "localhost",
    port : 1433,
    username : "Pegasus",
    password : "Comet",
    database : "db_BGT",
    entities : [__dirname + '/**/*.entity.{ts, js}'],
    autoLoadEntities : true,
    synchronize : true,
    extra : {
      validateConnection : false,
      trustServerCertificate : true
    }
  }),
  BoardGameModule, PlayerModule, GameModeModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
