import BoardGamePage from "../pages/boardgames/boardgame-page";
import ContactPage from "../pages/contact/contact-page";
import ChooseGame from "../pages/creategame/pages/choosegame/choosegame-page";
import CreateGamePage from "../pages/creategame/creategame-page";
import NotFound from "../pages/errors/not-found-page";
import HomePage from "../pages/home/home-page";
import PlayersPage from "../pages/players/players-page";
import LoginUser from "../components/user/registred/loginuser";
import Boardgames from "../components/boardgames/boargames";

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
    element: <PlayersPage/>
  },
  {
    path:'contact',
    element: <ContactPage/>
  },
  {
    path: 'creategame',
    element: <CreateGamePage/>,
    children: [
      {
        index: true,
        element: <ChooseGame/>
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