import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from "./Pages/Home"
import Form from "./Pages/Form"
import "../styles/styles.scss"
import CourseGrid from "./Organisms/CourseGrid"
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Users from './Pages/Users'
import User from './Pages/User'





const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/Cursos/:id" exact component={ Course } />
      <Route path="/Cursos" component={ CourseGrid } />
      <Route path="/Usuarios/:id" component={ User } />
      <Route path="/Usuarios" component={ Users } />
      <Route path="/Historial" component={ History } />
      <Route path="/Formulario" component={() => <Form name="Contacto" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <p>Página no encontrada</p>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App;
