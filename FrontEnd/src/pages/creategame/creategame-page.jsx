import { Outlet } from "react-router-dom";

const CreateGamePage = () => {

  return(
    <>
    <h1>Create a game</h1>
    <p>this is the create game page</p>
    <Outlet />
    </>
  )

}
export default CreateGamePage;