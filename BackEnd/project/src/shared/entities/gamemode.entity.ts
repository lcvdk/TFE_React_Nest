import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("t_gamemode")
export class GameModeEntity{
  @PrimaryGeneratedColumn()
  gameMode_id: number

  @Column({length : 100, nullable : false, default : "N/C"})
  gameMode_title : string

}
