// Router
import { useRoutes } from 'react-router-dom';
import appRoutes from './routes/app.routes';

//Navbar
import Navbar from "./components/navbar/navbar";

//BOOTSTRAP
import {Button , Alert, Breadcrumb, Card, Form } from 'react-bootstrap' // import B's Components
import 'bootstrap/dist/css/bootstrap.min.css' // Import B's CSS



function App() {

  //router
  const routes = useRoutes(appRoutes);


  return (
    <div>
      <Navbar/>
      {routes}
    </div>
  );
}

export default App;
