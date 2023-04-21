import BoardGamePage from "../pages/boardgames/boardgame-page";
import ContactPage from "../pages/contact/contact-page";
import CreateGamePage from "../pages/creategame/creategame-page";
import NotFound from "../pages/errors/not-found-page";
import HomePage from "../pages/home/home-page";
import PlayersPage from "../pages/players/players-page";
import LoginUser from "../components/user/registred/loginuser";
import OneBoardGamePage from "../pages/boardgames/oneboardgame-page";
import ChooseGamePage from "../pages/creategame/pages/choosegame/choosegame-page";
import MeteoPage from "../pages/meteo/meteo-page";
import PlayerIndexPage from "../pages/players/playersIndex-page";
import PlayerDetailPage from "../pages/players/playersDetail.page";

const appRoutes = [
  {
    path:'',
    element: <HomePage/>
  },
  {
    path:'boardgames',
    element: <BoardGamePage/>
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
  {
    path: 'creategame',
    element: <CreateGamePage/>,
    children: [
      {
        index: true,
        element: <ChooseGamePage/>
      },
      { 
        path: ':boardgame_id',
        element: <OneBoardGamePage/>
      }
      ]
  },
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