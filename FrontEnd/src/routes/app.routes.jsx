//BOARDGAMES
import BoardGamePage from "../pages/boardgames/boardgames.page";
import BoardGameDetailPage from "../pages/boardgames/boardgamesDetail.page";
import BoardGamesIndexPage from "../pages/boardgames/boardgamesIndex.page";

//CONTACT
import ContactPage from "../pages/contact/contact.page";

//CREATE GAME
import CreateGamePage from "../pages/creategame/creategame.page";

//NOT FOUND
import NotFound from "../pages/errors/not-found.page";

//HOME
import HomePage from "../pages/home/home.page";

//METEO
import MeteoPage from "../pages/meteo/meteo.page";

//PLAYERS
import PlayersPage from "../pages/players/players.page";
import PlayerDetailPage from "../pages/players/playersDetail.page";
import PlayerIndexPage from "../pages/players/playersIndex.page";

//USER
import LoginUser from "../components/user/registred/loginuser";


const appRoutes = [
  {
    path:'',
    element: <HomePage/>
  },
  {
    path:'boardgames',
    element: <BoardGamePage/>,
    children : [
      {
        index: true,
        element: <BoardGamesIndexPage/> 
      },
      {
        path: ':boardgameId',
        element: <BoardGameDetailPage/>
      }
    ]
  },
  {
    path:'players',
    element: <PlayersPage/>,
    children: [
      {
        index: true,
        element: <PlayerIndexPage/>
      },
      {
        path: ':playerId',
        element: <PlayerDetailPage/>
      }
    ]
    
  },
  {
    path:'contact',
    element: <ContactPage/>
  },
  {
    path:'meteo',
    element: <MeteoPage/>
  },
  // {
  //   path: 'creategame',
  //   element: <CreateGamePage/>,
  //   children: [
  //     {
  //       index: true,
  //       element: <ChooseGamePage/>
  //     },
  //     { 
  //       path: ':boardgame_id',
  //       element: <OneBoardGamePage/>
  //     }
  //     ]
  // },
  {
    path: 'login',
    element: <LoginUser/>
  },

  {  
    path:'*',
    element: <NotFound/>
  }

]
export default appRoutes;