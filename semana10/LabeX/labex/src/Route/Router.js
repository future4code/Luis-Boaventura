import {ApplicationFormPage} from '../pages/ApplicationFormPage/ApplicationFormPage'
import {CreateTripPage} from '../pages/CreateTripPage/CreateTripPage'
import {ErrorPage} from '../pages/ErrorPage/ErrorPage'
import {HomePage} from '../pages/HomePage/HomePage'
import {AdminHomePage} from '../pages/AdminHomePage/AdminHomePage'
import {ListTripsPage} from '../pages/ListTripsPage/ListTripsPage'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {TripDetailsPage} from '../pages/TripDetailsPage/TripDetailsPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
  

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/adm"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/formulario-de-aplicação"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/criar-viagem"}>
          <CreateTripPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>

        <Route exact path={"/viagens"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/pagina-de-detalhes"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

