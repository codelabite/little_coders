import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./Component/StateFile/Home/HomeScreen";
import HeaderView from "./Component/StateFile/Header/Header";
import AddCourse from "./Component/StateFile/AddCourse/AddCourse";
import EditCourse from "./Component/StateFile/AddCourse/Edit";
import { ContextProvider } from "./Component/Context/GlobalState";

function App() {
  return (
    <ContextProvider>
      <Router>
        <HeaderView />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/add" exact component={AddCourse} />
          <Route path="/edit/:id" exact component={EditCourse} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
