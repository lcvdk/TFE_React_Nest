import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity("t_boardgames") // nom de mon tableau dans la DB
export class BoardGamesEntity{
  @PrimaryGeneratedColumn()
  boardgame_id: number
  
  @Column({length : 100, nullable : false, default : "N/C"})
  boardgame_title: string

  @Column({length : 200, nullable : true, default : "N/C"})
  boardgame_subtitle: string

  @Column({length : 100, nullable : false, default : "N/C"})
  boardgame_genre: string

  @Column({length : 100, nullable : false, default : "N/C"})
  boardgame_difficulty: string

  @Column()
  boardgame_playtime: number

  @Column()
  boardgame_maxPlayers: number

  @Column({length : 500, nullable : false, default : "N/C"})
  boardgame_synopsis: string

}



  

  
  

  
  
  
  
  