const BoardGameDetail = ({ boardgame_id, boardgame_title, boardgame_subtitle, boardgame_genre, boardgame_difficulty, boardgame_playtime,boardgame_maxPlayers, boardgame_synopsis  }) => (
  <div>
      <p>
          {boardgame_title}
          {boardgame_subtitle} 
          {boardgame_genre}
          {boardgame_difficulty}
          {boardgame_playtime}
          {boardgame_maxPlayers}
          {boardgame_synopsis}
      </p>
      <img src={image} alt={`Image de ${boardgame_title}`} />
      
  </div>
);



export default BoardGameDetail;


  
  

