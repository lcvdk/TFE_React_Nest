import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("t_players") // nom de mon tableau dans la DB
export class PlayersEntity{
  @PrimaryGeneratedColumn()
  player_id: number
  
  @Column({length : 100, nullable : false, default : "N/C"})
  player_pseudo: string

  @Column({length : 100, nullable : false, default : "N/C"})
  player_email: string
}