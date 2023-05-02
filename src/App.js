import { BrowserRouter,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';


//styles
import './App.css'

//pages and components
import Dashboard from "./pages/dashboard/Dashboard"
import Create from "./pages/create/Create"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Project from "./pages/project/Project"
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container'>
        <Navbar>
          <Switch>

            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/projects/:id">
              <Project/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>

          </Switch>
        </Navbar>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App
